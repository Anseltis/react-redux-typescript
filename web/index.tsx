import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';

import { StoreType } from './store/store';
import { configureStore } from './configureStore';

import { TodoList } from './components/todoList';
import { AddTodo } from './components/addTodo';

const store: Store<StoreType> = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <div>
            <AddTodo />
            <TodoList />
        </div>
    </Provider>,
    document.getElementById('root'));