import * as pdf from 'pdfmake/build/pdfmake';
import { PDFCreateOptions, PDFHook, PluginOptions, TCreatedPdf, TDocumentDefinitions } from './types';
import { ref, Ref } from 'vue';

const create = (
  document: TDocumentDefinitions = {
    content: [
      {
        text: 'Hello Vue!',
        style: 'header',
      },
      'https://github.com/Novout/vue-pdfmake',
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
    },
  },
  options: PDFCreateOptions = {
    defaultFonts: true,
  },
): TCreatedPdf => {
  let fonts = {};

  if (options.defaultFonts) {
    fonts = {
      Roboto: {
        normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
        bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
        italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
        bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf',
      }
    };

    return pdf.createPdf(document, {}, fonts);
  }

  return pdf.createPdf(document);
};

const get = (): any => {
  return <any>pdf;
};

export const getProvider = (options?: PluginOptions): PDFHook => {
  const hook = {
    create,
    get,
  } as PDFHook;

  return hook;
};
