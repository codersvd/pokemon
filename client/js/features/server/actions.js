export const SERVER_RECEIVE = 'SERVER_RECEIVE';
export const SERVER_SEND = 'SERVER_SEND';
export const SERVER_CONNECT = 'SERVER_CONNECT';
export const SERVER_CONNECTED = 'SERVER_CONNECTED';
export const SERVER_DISCONNECTED = 'SERVER_DISCONNECTED';
export const SERVER_ERROR = 'SERVER_ERROR';

/**
 * @function serverReceive
 * @description action if data received from server
 * @param action {Object} - any data
 * @return action {Object}
 */
export function serverReceive(action = {}) {
    return {...action, type: action.type || SERVER_RECEIVE};
}

/**
 * @function serverSend
 * @description action send data to server
 * @param action {Object} - any data
 * @param action.type {String} - type of action
 * that can be handled on the server
 * @return action {Object}
 */
export function serverSend(action = {}) {
    return {type: SERVER_SEND, action};
}

/**
 * @function serverConnect
 * @description action connect server
 * @param {String} url - server url
 * @return action {Object}
 */
export function serverConnect(url) {
    return {type: SERVER_CONNECT, url};
}

/**
 * @function serverConnected
 * @description action if server connected
 * @return action {Object}
 */
export function serverConnected() {
    return {type: SERVER_CONNECTED};
}

/**
 * @function serverDisconnected
 * @description action if server disconnected
 * @return action {Object}
 */
export function serverDisconnected() {
    return {type: SERVER_DISCONNECTED};
}

/**
 * @function serverError
 * @description action if server error
 * @return action {Object}
 */
export function serverError(error) {
    return {type: SERVER_ERROR, error};
}
