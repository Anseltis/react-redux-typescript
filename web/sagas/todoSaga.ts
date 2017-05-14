import { takeEvery, takeLatest, effects, Effect, SagaIterator } from 'redux-saga';
import { Action } from 'redux';
import { reset } from 'redux-form';

import * as ActionName from '../actionNames';
import { StoreType } from '../store/store';
import { todoActions } from '../actions/todoActions';
import { use } from '../../tools/react/action';

export function* watchAndLog(): SagaIterator {
  yield* takeEvery('*', function* (action: Action): SagaIterator {
    console.log('action', action);
    const state: any = yield effects.select();
    console.log('state after', state);
  });
}

export function* watchSubmit(): SagaIterator {
  yield* takeEvery('@@redux-form/SET_SUBMIT_SUCCEEDED', function* (action: Action): SagaIterator {
    yield effects.put(reset('todo-add'));
  });
}