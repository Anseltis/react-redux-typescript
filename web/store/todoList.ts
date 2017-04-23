import { TodoState, TodoStore } from './todo';
import { List } from 'immutable';

export type TodoListState  = TodoState[];
export type TodoListStore  = List<TodoStore>;