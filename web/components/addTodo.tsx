import * as React from 'react';
import { PropTypes, Validator } from 'prop-types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Map } from 'immutable';

import * as Action from '../actions/todoActions';

export interface AddTodoProps extends React.Props<any> {
    addTodo?: (text: string) => void;
}

export const AddTodoPropTypes : Map<string, Validator<any>> = Map<string, Validator<any>>();

function mapStateToProps (state: any): AddTodoProps {
  return {
  };
}
function mapDispatchToProps(dispatch: Dispatch<any>): AddTodoProps {
  return {
      addTodo: (text) => dispatch(Action.addTodo(text))
  };
}

const addTodo: React.StatelessComponent<AddTodoProps>  = (props) => {
    let input: any;
    return <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          props.addTodo(input.value);
          input.value = '';
        }}
      >
        <input ref= {node => { input = node; }} />
        <button type='submit'>
          Add Todo
        </button>
      </form>
    </div>;
};


addTodo.propTypes = AddTodoPropTypes .toJS();

export const AddTodo : React.StatelessComponent<AddTodoProps> = connect(mapStateToProps, mapDispatchToProps)(addTodo);