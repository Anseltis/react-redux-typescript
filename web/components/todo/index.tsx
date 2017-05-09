import * as React from 'react';
import { HelperFunction } from 'react-bem-helper';

import { TodoProps, TodoPropTypes } from '../../props/todo';
import { bem } from '../../../tools/bem';

import './style.scss';

const classes: HelperFunction<string> = bem('todo-item');

export const Todo: React.StatelessComponent<TodoProps>  = (props) => {
  return <li
      className={classes(null, props.completed && 'completed')}
      onClick={props.onClick}>
      {props.text}      
    </li>;
};

Todo.propTypes = TodoPropTypes;
