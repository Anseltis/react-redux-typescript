import { Iterable } from 'immutable/dist/immutable-nonambient';
import { Store, StoreEnhancer, Middleware, Reducer, GenericStoreEnhancer } from 'redux';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { default as sagaMiddlewareFactory, SagaMiddleware, SagaIterator, Effect, effects, takeEvery } from 'redux-saga';
import { reducer as formReducer } from 'redux-form';

import { createReducer } from '../tools/react/reducer';
import { devtool } from '../tools/react/devtool';
import { hotReplace } from '../tools/react/hotReplace';

import { StoreType } from './store/store';
import { initialTodoStore } from './store/initial';

import { TodoListReducer } from './reducers/todoReducer';
import { watchAndLog, watchSubmit } from './sagas/todoSaga';

const rootReducer: Reducer<StoreType> = combineReducers<StoreType>({
   form: formReducer,
   todo: createReducer(TodoListReducer, initialTodoStore)
  });

function* rootSaga(): SagaIterator  {
  yield <Effect[]><any>[
    watchAndLog(),
    watchSubmit()
  ];
}

export function configureStore(): Store<StoreType> {
  const sagaMiddleware: SagaMiddleware = sagaMiddlewareFactory();
  const store: Store<StoreType> = createStore<StoreType>(
    rootReducer,
    devtool<StoreType>(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(rootSaga);

  hotReplace(store, './reducers/todoReducer');
  return store;
}