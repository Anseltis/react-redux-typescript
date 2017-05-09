import { TodoListState, TodoListStore } from './todoList';
import { Map } from 'immutable';

export class StateType {
    todo: TodoListState;
}

export type StoreType =  {
    todo: TodoListStore;
}