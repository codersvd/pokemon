import WebSocketService from '../../services/web-socket';
import App from '../../app';

import {
    SERVER_CONNECT,
    SERVER_SEND
} from './actions';

export default [

    /**
     * @description middleware for action SERVER_CONNECT
     * connect server and subscribe store
     */
    store => next => action => {
        next(action);
        if (action.type === SERVER_CONNECT) {
            let ws = new WebSocketService(action.url);
            App.services.webSocket = ws;
            ws.onData('action', App.actions.serverReceive);
            ws.onConnect(App.actions.serverConnected);
            ws.onDisconnect(App.actions.serverDisconnected);
            ws.onError(App.actions.serverError);
        }
    },

    /**
     * @description middleware for action SERVER_SEND
     * send data to server
     */
    store => next => action => {
        next(action);
        if (action.type === SERVER_SEND) {
            if (App.services.webSocket) {
                App.services.webSocket.send('action', action.action);
            }
        }
    }

];
