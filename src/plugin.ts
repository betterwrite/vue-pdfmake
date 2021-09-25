import { App, Plugin } from '@vue/runtime-core';
import { getProvider } from './provider';
import { PluginOptions } from './types';
import { Key } from './utils';

export const PDFPlugin: Plugin = {
  install: (app: App, options: PluginOptions = {}) => {
    app.provide(Key, getProvider(options));
    app.config.globalProperties.$pdf = getProvider(options);
  },
};
