import * as React from 'react';
import { PropTypes, Validator } from 'prop-types';
import { Map } from 'immutable';


export interface TodoOwnProps extends React.Props<any> {
    id: string;
    text: string;
    completed: Boolean;
}

export interface TodoDispatchProps extends React.Props<any> {
    onClick: () => void;
}

export type TodoProps = TodoOwnProps & TodoDispatchProps;

export const TodoPropTypes : any = Map<string, Validator<any>>()
  .set('id', PropTypes.string.isRequired)
  .set('completed', PropTypes.bool.isRequired)
  .toJS();
