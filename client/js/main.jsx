import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import App from './app';
import RootContainer from './root';
/**
 * @const ConnectedRootContainer
 * @description RootContainer with connected store
 */
const ConnectedRootContainer = connect(state => state)(RootContainer);

/**
 * @function mainInit
 * @description render main component
 * @param container {Object} - DOM element
 */
export function mainInit(container) {
    ReactDOM.render(
        <Provider store={App.store}>
            <ConnectedRootContainer/>
        </Provider>,
        container
    );
}
