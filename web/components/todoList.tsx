import * as React from 'react';
import { PropTypes, Validator } from 'prop-types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Map } from 'immutable';

import { TodoListStore, TodoListState } from '../store/todoList';
import { getVisibleTodoList } from '../selectors/todoSelector';
import { toggleTodo } from '../actions/todoActions';
import { Todo, TodoPropTypes } from './todo';

export interface TodoListProps extends React.Props<any> {
  todoList?: TodoListState;
  onTodoClick?: (id: string) => void;
}

export const TodoListPropTypes: Map<string, Validator<any>> = Map<string, Validator<any>>()
  .set('todoList', PropTypes.arrayOf(PropTypes.shape(TodoPropTypes.toJS()).isRequired).isRequired)
  .set('onTodoClick', PropTypes.func.isRequired);

function mapStateToProps (state: TodoListStore): TodoListProps {
  return {
    todoList: getVisibleTodoList(state)
  };
}
function mapDispatchToProps(dispatch: Dispatch<any>): TodoListProps {
  return {
    onTodoClick: (id) => dispatch(toggleTodo(id))
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export class TodoList extends React.Component<TodoListProps, TodoListStore> {
  static propTypes : any = TodoListPropTypes.toJS();
  constructor(props: TodoListProps, context: any) {
     super(props, context);
  }

  render(): JSX.Element | null {
    return <ul>{ this.props.todoList.map(todo => <Todo
      key={todo.id}
      onClick={() => this.props.onTodoClick(todo.id)}
      {...todo} />)}</ul>;
  }
}