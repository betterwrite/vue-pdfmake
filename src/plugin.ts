import { App, Plugin } from 'vue-demi';
import PDFMAKE from 'pdfmake/build/pdfmake';
import VFS_FONTS from 'pdfmake/build/vfs_fonts';

interface PluginOptions {
  autoInstallVFS?: boolean
}

export const PDFPlugin: Plugin = {
  install: (app: App, options: PluginOptions = {}) => {
    if(options.autoInstallVFS) PDFMAKE.addVirtualFileSystem(VFS_FONTS);
    app.config.globalProperties.$pdf = PDFMAKE as any;
  },
};
