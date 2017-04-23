import { Iterable } from 'immutable/dist/immutable-nonambient';
import { Store, StoreEnhancer, Middleware, Reducer } from 'redux';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { default as sagaMiddlewareFactory, SagaMiddleware, SagaIterator, Effect, effects, takeEvery } from 'redux-saga';

import { StoreType } from './store/store';
import { todoListReducer } from './reducers/todoReducer';
import { watchAndLog, watchLast } from './sagas/todoSaga';
import { initialStore } from './store/initial';

const devtool: StoreEnhancer<StoreType> =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

 const rootReducer: Reducer<StoreType> = combineReducers<StoreType>({
   todoListReducer
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
    todoListReducer,
    initialStore,
    compose(<StoreEnhancer<StoreType>>applyMiddleware(sagaMiddleware), devtool));
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