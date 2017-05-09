import { Iterable } from 'immutable/dist/immutable-nonambient';
import { Store, StoreEnhancer, Middleware, Reducer, GenericStoreEnhancer } from 'redux';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { default as sagaMiddlewareFactory, SagaMiddleware, SagaIterator, Effect, effects, takeEvery } from 'redux-saga';
import { reducer as formReducer } from 'redux-form';

import { StoreType } from './store/store';
import { todoListReducer } from './reducers/todoReducer';
import { watchAndLog, watchLast } from './sagas/todoSaga';

function devtool(enhancer: GenericStoreEnhancer): StoreEnhancer<StoreType> {
  if (typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION__) {
    let tool: any = (window as any).__REDUX_DEVTOOLS_EXTENSION__({
      serialize: true
    });
    return compose(<StoreEnhancer<StoreType>>enhancer, tool);
  }

  return <StoreEnhancer<StoreType>>enhancer;
}

 const rootReducer: Reducer<StoreType> = combineReducers<StoreType>({
   form: formReducer,
   todo: todoListReducer
  });

function* rootSaga(): SagaIterator  {
  yield <Effect[]><any>[
    watchAndLog(),
    watchLast()
  ];
}

export function configureStore(): Store<StoreType> {
  const sagaMiddleware: SagaMiddleware = sagaMiddlewareFactory();
  const store: Store<StoreType> = createStore<StoreType>(
    rootReducer,
    devtool(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);

  if ((<any>module).hot) {
    // Enable Webpack hot module replacement for reducers
    (<any>module).hot.accept('./reducers/todoReducer', () => {
      const nextReducer: any = require('./reducers/todoReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}