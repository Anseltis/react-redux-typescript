import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';

import { StoreType } from './store/store';
import { configureStore } from './configureStore';

import { VisibleTodoList } from './containers/VisibleTodoList';
import { FormTodoAdd } from './containers/FormTodoAdd';
import { TodoLayout } from './components/todo-layout';

const store: Store<StoreType> = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <TodoLayout>
            <FormTodoAdd />
            <VisibleTodoList />
        </TodoLayout>
    </Provider>,
    document.getElementById('root'));