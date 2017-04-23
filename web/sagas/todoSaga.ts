import { takeEvery, takeLatest, effects, Effect, SagaIterator } from 'redux-saga';
import * as ActionName from '../actionNames';
import { StoreType } from '../store/store';
import { addTodo } from '../actions/todoActions';

function* logger(action: any): SagaIterator {
    console.log('action', action);
    const state: any = yield effects.select();
    console.log('state after', state);
  }

export function* watchAndLog(): SagaIterator {
  yield* takeEvery('*', logger);
}

function* addIfLast(): SagaIterator {
    const state: StoreType = yield effects.select();
    if (state.filter(todo => !todo.get('completed')).count() === 0) {
        yield effects.put(addTodo('add new todo for example'));
    }
  }

export function* watchLast(): SagaIterator {
  yield* takeLatest(ActionName.TOGGLE_TODO, addIfLast);
}