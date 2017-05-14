import * as React from 'react';
import { connect, MapStateToProps, MapDispatchToPropsFunction } from 'react-redux';
import { Dispatch } from 'redux';

import { TodoListState, TodoListStore } from '../store/todoList';
import { StoreType } from '../store/store';
import { getVisibleTodoList } from '../selectors/todoSelector';
import { todoActions } from '../actions/todoActions';
import { TodoListStateProps, TodoListDispatchProps, TodoListOwnProps, TodoListProps, TodoListPropTypes } from '../props/todoList';
import { TodoOwnProps } from '../props/todo';
import { TodoList } from '../components/todo-list';
import { use } from '../../tools/react/action';

const mapStateToProps: MapStateToProps<TodoListStateProps, TodoListOwnProps> = (state: StoreType, props) => {
  return {
    todoList: getVisibleTodoList(state).map(todo => {
      return {
        id: todo.id,
        text: todo.text,
        completed: todo.completed
      };
    })
  };
};

const mapDispatchToProps: MapDispatchToPropsFunction<TodoListDispatchProps, TodoListOwnProps> = (dispatch: Dispatch<any>, props) => {
  return {
    onTodoClick: (id) => dispatch(use(todoActions.toggleTodo)(id))
  };
};

export const VisibleTodoList: React.ComponentClass<TodoListOwnProps> = connect(mapStateToProps, mapDispatchToProps)(TodoList);
