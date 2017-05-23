import * as React from 'react';
import { block} from '@redneckz/react-bem-helper';

import { TodoAddTextProps } from '../../props/todoAddText';

import './style.scss';

@block('todo-add-text', props => ({ required: props.meta.error === 'required'}))
export class TodoAddText extends React.PureComponent<TodoAddTextProps, void>  {
  constructor(props: TodoAddTextProps, context: any) {
    super(props, context);
  }
  render(): JSX.Element | null {
    return <input {...this.props.input} className={this.props.className} />
  }
};
