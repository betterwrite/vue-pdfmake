import * as pdf from 'pdfmake/build/pdfmake';
import { TFontDictionary } from './types';

export const setFonts = (fonts: TFontDictionary) => {
  (<any>pdf).vfs = fonts;
};
