import { compose, StoreEnhancerStoreCreator } from 'redux';

export const composeEnhancers: any =
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();
