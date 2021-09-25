import { Plugin, App } from '@vue/runtime-core';
import { PluginOptions } from './types';
import { usePDF } from './use';

export { usePDF } from './use';
export default {
  install: (app: App, options: PluginOptions = {}) => {
    app.provide('vue-pdfmake', usePDF().pdfMake);
  },
} as Plugin;
