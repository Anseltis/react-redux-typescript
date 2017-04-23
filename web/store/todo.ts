import { Map } from 'immutable';

export class TodoState {
    readonly id: string;
    readonly text: string;
    readonly completed: Boolean;
}

export type TodoStore = Map<string, any>;