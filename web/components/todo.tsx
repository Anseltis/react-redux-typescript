import * as React from 'react';
import { PropTypes, Validator } from 'prop-types';
import { Map } from 'immutable';

export interface TodoProps extends React.Props<any> {
    id: string;
    text: string;
    completed: Boolean;
    onClick: () => void;
}

export const TodoPropTypes : Map<string, Validator<any>> = Map<string, Validator<any>>()
  .set('id', PropTypes.string.isRequired)
  .set('completed', PropTypes.bool.isRequired)
  .set('text', PropTypes.string.isRequired);

export const Todo: React.StatelessComponent<TodoProps>  = (props) => {
  return <li
    style={{textDecoration: props.completed ? 'line-through' : 'none' }}
    onClick={props.onClick}>
    {props.text}      
    </li>;
};

Todo.propTypes = TodoPropTypes.toJS();
