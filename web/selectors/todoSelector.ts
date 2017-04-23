import { createSelector, Selector, OutputSelector } from 'reselect';
import { TodoListStore, TodoListState } from '../store/todoList';

const getTodoList: (state: TodoListStore) => TodoListStore = (state) => {
  return state;
};

export const getVisibleTodoList: OutputSelector<TodoListStore, TodoListState, (res: TodoListStore) => TodoListState> = createSelector(
  [getTodoList],
  (todoList) => todoList.filter(todo => !todo.get('completed')).toJS()
);