import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';

import { StoreType } from './store/store';
import { configureStore } from './configureStore';

import { TodoList } from './components/todo-list';
import { TodoAdd } from './components/todo-add';

const store: Store<StoreType> = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <div>
            <TodoAdd />
            <TodoList />
        </div>
    </Provider>,
    document.getElementById('root'));