import * as React from 'react';
import { HelperFunction } from 'react-bem-helper';

import { TodoAddTextProps } from '../../props/todoAddText';
import { bem } from '../../../tools/bem';

import './style.scss';

const classes: HelperFunction<string> = bem('todo-add-text');

export const TodoAddText: React.StatelessComponent<TodoAddTextProps> = (props): JSX.Element | null => {
  return <input className={classes(null, props.meta.error)} {...props.input} />
};
