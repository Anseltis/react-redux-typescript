import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';

import { initialStore } from './store/initial';
import { StoreType } from './store/store';
import { todoListReducer } from './reducers/todoReducer';

import { TodoList } from './components/todoList';
import { AddTodo } from './components/addTodo';
import { composeEnhancers } from './middleware';


const store: Store<StoreType> = createStore(
    todoListReducer,
    initialStore,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={ store }>
        <div>
            <AddTodo />
            <TodoList />
        </div>
    </Provider>,
    document.getElementById('root'));