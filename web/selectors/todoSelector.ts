import { createSelector, Selector, OutputSelector } from 'reselect';
import { TodoListStore, TodoListState } from '../store/todoList';
import { StoreType } from '../store/store';

const getTodoList: (state: StoreType) => TodoListStore = (state) => {
  return state.todo;
};

export const getVisibleTodoList: OutputSelector<StoreType, TodoListState, (res: TodoListStore) => TodoListState> = createSelector(
  [getTodoList],
  (todoList) => todoList.filter(todo => !todo.get('completed')).toJS()
);