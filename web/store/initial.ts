import { Map, List, fromJS } from 'immutable';

import { TodoState } from './todo';
import { TodoListState } from './todoList';
import { StateType, StoreType } from './store';

export const lastTodoId: number = 1;
export const initialState: StateType = [
    <TodoState>{
        id: '1',
        text: 'test',
        completed: false
    }
];

export const initialStore: StoreType = fromJS(initialState);