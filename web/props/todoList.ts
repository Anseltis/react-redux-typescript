import * as React from 'react';
import { PropTypes, Validator } from 'prop-types';
import { Map } from 'immutable';

import { TodoOwnProps, TodoPropTypes } from './todo';
import { BemProps } from '../../tools/react/bem';

export interface TodoListStateProps extends React.Props<any> {
  todoList?: TodoOwnProps[];
}

export interface TodoListOwnProps extends React.Props<any> {
}

export interface TodoListDispatchProps extends React.Props<any> {
  onTodoClick?: (id: string) => void;
}

export type TodoListProps = TodoListOwnProps & TodoListStateProps & TodoListDispatchProps & BemProps;

export const TodoListPropTypes: any = Map<string, Validator<any>>()
  .set('todoList', PropTypes.arrayOf(PropTypes.shape(TodoPropTypes).isRequired).isRequired)
  .set('onTodoClick', PropTypes.func.isRequired)
  .toJS();
