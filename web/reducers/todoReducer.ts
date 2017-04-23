import * as ActionName from '../actionNames';

import { TodoListStore } from '../store/todoList';
import { TodoStore } from '../store/todo';
import { Map, List, fromJS } from 'immutable';

export interface TodoReducer {
  (state: TodoStore, action: any): TodoStore;
}

export interface TodoListReducer {
  (state: TodoListStore, action: any): TodoListStore;
}

const todoReducer: TodoReducer = (state, action) => {
  switch (action.type) {
    case ActionName.TOGGLE_TODO:
      if (state.get('id') !== action.id) {
        return state;
      }
      return state.set('completed', !state.get('completed'));
    case ActionName.ADD_TODO:
      return fromJS({
        id: action.id,
        text: action.text,
        completed: false,
      });
    default:
      return state;
  }
};

export const todoListReducer: TodoListReducer = (state, action) => {
  switch (action.type) {
    case ActionName.ADD_TODO:
      return state.push(todoReducer(undefined, action));
    case ActionName.TOGGLE_TODO:
      return state
        .map(todo => todoReducer(todo, action))
        .toList();
    default:
      return state;
  }
};

