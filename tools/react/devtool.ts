import { StoreEnhancer, GenericStoreEnhancer, compose } from 'redux';

export function devtool<S>(enhancer: GenericStoreEnhancer): StoreEnhancer<S> {
  if (typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION__) {
    let tool: any = (window as any).__REDUX_DEVTOOLS_EXTENSION__({
      serialize: true
    });
    return compose(<StoreEnhancer<S>>enhancer, tool);
  }

  return <StoreEnhancer<S>>enhancer;
}
