import { getCurrentInstance, ComponentInternalInstance } from 'vue-demi';
import * as PDF from 'pdfmake/build/pdfmake';

export const usePDF = (): typeof PDF => {
  const internalInstance = getCurrentInstance()
  const pdf = (internalInstance as ComponentInternalInstance).appContext
    .config.globalProperties.$pdf

  return pdf as typeof PDF
}