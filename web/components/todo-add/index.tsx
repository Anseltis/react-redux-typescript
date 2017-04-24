import * as React from 'react';
import { PropTypes, Validator } from 'prop-types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Map } from 'immutable';

import * as Action from '../../actions/todoActions';

import './style.scss';

export interface TodoAddProps extends React.Props<any> {
    addTodo?: (text: string) => void;
}

export const TodoAddPropTypes : Map<string, Validator<any>> = Map<string, Validator<any>>();

function mapStateToProps (state: any): TodoAddProps {
  return {
  };
}
function mapDispatchToProps(dispatch: Dispatch<any>): TodoAddProps {
  return {
      addTodo: (text) => dispatch(Action.addTodo(text))
  };
}

const todoAdd: React.StatelessComponent<TodoAddProps>  = (props) => {
    let input: any;
    return <div className='todo-add'>
      <form className='todo-add__form'
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          props.addTodo(input.value);
          input.value = '';
        }}
      >
        <input ref= {node => { input = node; }} className='todo-add__text-input' />
        <button type='submit' className='todo-add__add-button'>
          Add Todo
        </button>
      </form>
    </div>;
};


todoAdd.propTypes = TodoAddPropTypes .toJS();

export const TodoAdd : React.StatelessComponent<TodoAddProps> = connect(mapStateToProps, mapDispatchToProps)(todoAdd);