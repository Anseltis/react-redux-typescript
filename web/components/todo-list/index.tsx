import * as React from 'react';
import { HelperFunction } from 'react-bem-helper';

import { TodoListProps, TodoListPropTypes } from '../../props/todoList';
import { Todo } from '../todo';
import { bem } from '../../../tools/bem';

import './style.scss';

const classes: HelperFunction<string> = bem('todo-list');

export class TodoList extends React.Component<TodoListProps, void> {
  static propTypes?: any = TodoListPropTypes;
  constructor(props: TodoListProps, context: any) {
     super(props, context);
  }

  render(): JSX.Element | null {
    return <ul className={classes()}>{
          this.props.todoList.map(todo => <Todo
          key={todo.id}
          onClick={() => this.props.onTodoClick(todo.id)}
          {...todo} />)
        }
      </ul>;
  }
}