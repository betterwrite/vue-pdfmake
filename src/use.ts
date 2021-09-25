import { inject } from 'vue';
import { Key } from './utils';
import { PDFHook } from './types';
import { getProvider } from './provider';

export const usePDF = (): PDFHook => {
  const hook = inject(Key);
  return hook ? hook : getProvider();
};
