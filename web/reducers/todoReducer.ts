import { Action, Reducer } from 'redux';

import * as ActionName from '../actionNames';

import { TodoListStore } from '../store/todoList';
import { TodoStore } from '../store/todo';
import { Map, List, fromJS } from 'immutable';

import { initialTodoStore } from '../store/initial';
import { StoreType } from '../store/store';
import { ToggleTodoAction, AddTodoAction } from '../actions/todoActions';

import { reducer, createReducer } from '../../tools/react/reducer';
import { type } from '../../tools/react/action';


class TodoReducer {

  @reducer(ActionName.TOGGLE_TODO)
  toggle(state: TodoStore, action: ToggleTodoAction): TodoStore {
      if (state.get('id') !== action.id) {
        return state;
      }
      return state.set('completed', !state.get('completed'));
  }

  @reducer(ActionName.ADD_TODO)
  add(state: TodoStore, action: AddTodoAction): TodoStore {
      return fromJS({
        id: action.id,
        text: action.text,
        completed: false,
      });
  }
};

const todoReducer: Reducer<TodoStore> = createReducer<TodoStore>(TodoReducer);

export class TodoListReducer {

  @reducer(ActionName.ADD_TODO)
  add(state: TodoListStore = initialTodoStore, action: AddTodoAction): TodoListStore {
    return state.concat([todoReducer(undefined, type(action))]);
  }

  @reducer(ActionName.TOGGLE_TODO)
  toggle(state: TodoListStore = initialTodoStore, action: ToggleTodoAction): TodoListStore {
    return state
      .map(todo => todoReducer(todo, type(action)));
  }
}
