import './less/app.less';

import {mainInit} from './js/main';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import App from './js/app';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
const createStoreWithMiddleware = applyMiddleware(...App.middlewares)(createStore);
App.store = createStoreWithMiddleware(combineReducers(App.reducers), {}, devTools);

mainInit(document.getElementById('root'));
// @TODO get from config
//App.actions.serverConnect('http://127.0.0.1:9000');
