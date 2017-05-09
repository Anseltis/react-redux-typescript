import * as React from 'react';
import { PropTypes, Validator } from 'prop-types';
import { Map } from 'immutable';
import {  FormProps, DataShape, Config, FormErrors } from 'redux-form';

export interface TodoAddFormData extends DataShape {
    text: string;
}
export const TodoAddPropTypes : Map<string, Validator<any>> = Map<string, Validator<any>>()
    .toJS();

export interface TodoAddStateProps extends React.Props<any> {
}

export interface TodoAddNativeProps extends React.Props<any> {
}

export interface TodoAddOwnProps extends TodoAddNativeProps, FormProps<TodoAddFormData, TodoAddProps, void> {
}

export interface TodoAddDispatchProps extends React.Props<any>, FormProps<TodoAddFormData, TodoAddProps, void> {
}

export type TodoAddProps = TodoAddOwnProps & TodoAddStateProps & TodoAddDispatchProps;

export function todoAddValidate(values: TodoAddFormData, props: TodoAddOwnProps): FormErrors<TodoAddFormData> {
    const errors: FormErrors<TodoAddFormData> = { text: undefined };
    if (values.text === undefined || !values.text.trim()) {
        errors.text = 'required';
    };
    return errors;
}

export const todoAddConfig: Config<TodoAddFormData, TodoAddOwnProps, void> = {
      form: 'todo-add',
      validate: todoAddValidate
};