import { Action } from 'redux';

import * as ActionName from '../actionNames';
import { lastTodoId } from '../store/initial';
import { action } from '../../tools/react/action';

export class ToggleTodoAction {
    id: string;
}

export class AddTodoAction {
  id: string;
  text: string;
}

let nextTodoId: number = lastTodoId + 1;

class TodoActions {

  @action(ActionName.TOGGLE_TODO)
  toggleTodo(id: string): ToggleTodoAction {
    return {
      id: id
    };
  }

  @action(ActionName.ADD_TODO)
  addTodo(text: string): AddTodoAction  {
    return {
      id: (nextTodoId++).toString(),
      text: text
    };
  }
}

export type TodoAction = Action & (ToggleTodoAction | AddTodoAction);
export const todoActions: TodoActions = new TodoActions();