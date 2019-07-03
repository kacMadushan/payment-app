import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppContainer from './container/AppContainer';
import './styles/styles.less';

// Create Store
const store = configureStore();

const appRoot = (
    <Provider store={store}>
        <AppContainer />
    </Provider>
);

ReactDOM.render(appRoot, document.getElementById('app'));