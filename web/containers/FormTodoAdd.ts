import * as React from 'react';
import { connect, MapStateToProps, MapDispatchToPropsFunction } from 'react-redux';
import { Dispatch } from 'redux';
import { reduxForm } from 'redux-form';

import { todoActions } from '../actions/todoActions';
import { TodoAddStateProps, TodoAddDispatchProps, TodoAddOwnProps, TodoAddProps } from '../props/todoAdd';
import { TodoAddPropTypes, todoAddConfig } from '../props/todoAdd';
import { TodoAdd } from '../components/todo-add';
import { use } from '../../tools/react/action';

const mapStateToProps: MapStateToProps<TodoAddStateProps, TodoAddOwnProps> = (state: void, props) => {
  return {
  };
};

const mapDispatchToProps: MapDispatchToPropsFunction<TodoAddDispatchProps, TodoAddOwnProps> = (dispatch: Dispatch<any>, props) => {
  return {
    onSubmit: values => {
        dispatch(use(todoActions.addTodo)(values.text));
    }
  };
};

export const FormTodoAdd: React.ComponentClass<TodoAddOwnProps> =
  connect(mapStateToProps, mapDispatchToProps)(reduxForm(todoAddConfig)(TodoAdd));
