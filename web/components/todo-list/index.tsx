import * as React from 'react';
import { block } from '@redneckz/react-bem-helper';

import { TodoListProps, TodoListPropTypes } from '../../props/todoList';
import { Todo } from '../todo';

import './style.scss';

@block('todo-list')
export class TodoList extends React.Component<TodoListProps, void> {
  static propTypes?: any = TodoListPropTypes;
  constructor(props: TodoListProps, context: any) {
     super(props, context);
  }

  render(): JSX.Element | null {
    return <ul className={this.props.className}>{
          this.props.todoList.map(todo => <Todo
          key={todo.id}
          onClick={() => this.props.onTodoClick(todo.id)}
          {...todo} />)
        }
      </ul>;
  }
}