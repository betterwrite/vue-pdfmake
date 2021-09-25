import { getCurrentInstance, inject } from 'vue';
import { Key } from './utils';
import { PDFHook } from './types';
import { getProvider } from './provider';

export const usePDF = (): PDFHook => {
  return getCurrentInstance() ? (inject(Key) as PDFHook) : getProvider();
};
