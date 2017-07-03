import middlewares from './middlewares';
import reducers from './reducers';

import {
    setupActions,
    setupMiddlewares,
    setupReducers
} from '../../app';

import {
    serverReceive,
    serverSend,
    serverConnect,
    serverConnected,
    serverDisconnected,
    serverError
} from './actions';

setupActions({
    serverReceive,
    serverSend,
    serverConnect,
    serverConnected,
    serverDisconnected,
    serverError
});

setupMiddlewares(middlewares);
setupReducers(reducers);
