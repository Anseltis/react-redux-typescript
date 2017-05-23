import * as React from 'react';
import { block } from '@redneckz/react-bem-helper';

import { TodoProps, TodoPropTypes } from '../../props/todo';
import './style.scss';

@block('todo-item', props => ({completed: props.completed}))
export class Todo extends React.PureComponent<TodoProps, void> {
    static propTypes?: any = TodoPropTypes;
    constructor(props: TodoProps, context: any) {
      super(props, context);
    }

    render(): JSX.Element | null {
      return <li      
        onClick={this.props.onClick} className={this.props.className}>
          {this.props.text}      
        </li>;
    }
};
