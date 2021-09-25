import { InjectionKey, Ref } from 'vue';
import { PDFHook } from './types';

export type Maybe<T, P = any> = T | P | undefined | null;
export const Key: InjectionKey<PDFHook> = Symbol('VuePDFHook');
