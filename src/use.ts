import * as pdf from 'pdfmake/build/pdfmake';
import { PDFCreateOptions, PDFHook, TCreatedPdf, TDocumentDefinitions, TFontDictionary } from './types';

export const usePDF = (): PDFHook => {
  const create = (
    document: TDocumentDefinitions = {
      content: [
        {
          text: 'Hello Vue!',
          style: 'header',
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam.\n\n',
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
        },
        TimesNewRoman: {
          normal: 'Times-New-Roman-Regular.ttf',
          bold: 'Times-New-Roman-Bold.ttf',
          italics: 'Times-New-Roman-Italics.ttf',
          bolditalics: 'Times-New-Roman-Italics.ttf',
        },
      };
    }

    return pdf.createPdf(document, {}, fonts);
  };

  const setFonts = (fonts: TFontDictionary) => {
    (<any>pdf).vfs = fonts;
  };

  return {
    pdfMake: pdf,
    create,
    setFonts,
    fonts: pdf.fonts,
    tableLayouts: pdf.tableLayouts,
    vfs: pdf.vfs,
  } as PDFHook;
};
