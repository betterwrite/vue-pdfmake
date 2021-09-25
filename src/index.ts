import { Plugin, App } from '@vue/runtime-core';
import { PluginOptions } from './types';

const initialize = () => {
  console.log('test');
};

export default {
  install: (app: App, options: PluginOptions) => {
    /* declare global component */
    app.provide;
    app.mixin({
      created() {
        initialize();
      },
    });
  },
} as Plugin;
