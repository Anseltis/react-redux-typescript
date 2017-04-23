import * as ActionName from '../actionNames';
import { lastTodoId } from '../store/initial';
export function toggleTodo(id: string): any {
  return {
    type: ActionName.TOGGLE_TODO,
    id,
  };
}

let nextTodoId: number = lastTodoId + 1;
export function addTodo(text: string): any  {
  return {
    type: ActionName.ADD_TODO,
    id: (nextTodoId++).toString(),
    text,
  };
};
