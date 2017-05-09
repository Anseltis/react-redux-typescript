import * as React from 'react';
import { Field } from 'redux-form';
import { HelperFunction } from 'react-bem-helper';

import { TodoAddProps, TodoAddPropTypes } from '../../props/todoAdd';
import { TodoAddText } from '../todo-add-text';
import { bem } from '../../../tools/bem';

import './style.scss';

const classes: HelperFunction<string> = bem('todo-add');

export class TodoAdd extends React.Component<TodoAddProps, void> {
    static propTypes?: any = TodoAddPropTypes;
    constructor(props: TodoAddProps, context: any) {
      super(props, context);
    }

    render(): JSX.Element | null {
      return <div className={classes()}>
        <form onSubmit={this.props.handleSubmit} className={classes('form')}> 
          <Field name='text' component={TodoAddText}/>
          <button type='submit' className={classes('add-button')} >
            Add Todo
          </button>
        </form>
      </div>;
  }
}
