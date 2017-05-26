import * as React from 'react';
import { Field } from 'redux-form';
import { block, element } from '@redneckz/react-bem-helper';

import { TodoAddProps, TodoAddPropTypes } from '../../props/todoAdd';
import { TodoAddText } from '../todo-add-text';

import './style.scss';

const Form: any = element('form')('form');
const AddButton: any = element('add-button')('button');

//const classes: HelperFunction<string> = bem('todo-add');
@block('todo-add')
export class TodoAdd extends React.PureComponent<TodoAddProps, void> {
    static propTypes?: any = TodoAddPropTypes;

    constructor(props: TodoAddProps, context: any) {
      super(props, context);
    }
    
    render(): JSX.Element | null {
      return <div className={this.props.className}>
        <Form onSubmit={this.props.handleSubmit}> 
          <Field name='text' component={TodoAddText}/>
          <AddButton type='submit'  >
            Add Todo
          </AddButton>
        </Form>
      </div>;
  }
}
