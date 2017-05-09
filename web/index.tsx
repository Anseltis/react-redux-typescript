import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';

import { StoreType } from './store/store';
import { configureStore } from './configureStore';

import { VisibleTodoList } from './containers/VisibleTodoList';
import { FormTodoAdd } from './containers/FormTodoAdd';

const store: Store<StoreType> = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <div>
            <FormTodoAdd />
            <VisibleTodoList />
        </div>
    </Provider>,
    document.getElementById('root'));