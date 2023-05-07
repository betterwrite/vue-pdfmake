import { getCurrentInstance, ComponentInternalInstance } from 'vue-demi';

export const usePDF = (): any => {
  const internalInstance = getCurrentInstance()
  const pdf = (internalInstance as ComponentInternalInstance).appContext
    .config.globalProperties.$pdf

  return pdf as any
}