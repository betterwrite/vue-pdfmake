import { App, Plugin } from 'vue-demi';
import * as PDF from 'pdfmake/build/pdfmake';

interface PluginOptions {}

export const PDFPlugin: Plugin = {
  install: (app: App, options: PluginOptions = {}) => {
    app.config.globalProperties.$pdf = PDF as any;
  },
};
