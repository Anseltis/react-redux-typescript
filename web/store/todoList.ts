import { TodoState, TodoStore } from './todo';
import { Iterable } from 'immutable';

export type TodoListState  = TodoState[];
export type TodoListStore  = Iterable<TodoStore, TodoStore>;