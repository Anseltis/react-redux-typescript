import { Map, List, fromJS } from 'immutable';

import { TodoState } from './todo';
import { TodoListState, TodoListStore } from './todoList';
import { StateType, StoreType } from './store';

export const lastTodoId: number = 1;
export const initialTodoState: TodoListState = [
    <TodoState>{
        id: '1',
        text: 'test',
        completed: false
    }
];

export const initialTodoStore: TodoListStore = fromJS(initialTodoState);