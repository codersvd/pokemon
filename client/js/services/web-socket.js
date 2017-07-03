import io from 'socket.io-client';

/**
 * @class WebSocketService
 * @description Service for communication with server
 */
export default class WebSocketService {

    /**
     * @method constructor
     * @description Setup transport for communication with server
     * @param {String} url - server url
     */
    constructor(url) {
        this.socket = io(url);
    }

    /**
     * @method send
     * @description Send event with data to the server
     * @param {String} event - name of event
     * @param {Object} data - any data
     */
    send(event, data) {
        console.log(event, data);
        this.socket.emit(event, data);
    }

    /**
     * @method onData
     * @description Waiting for an incoming data
     * @param {String} event - name of event
     * @param {Function} cb - run if incomming data
     */
    onData(event, cb) {
        this.socket.on(event, cb);
    }

    /**
     * @method onConnect
     * @description Waiting for connect
     * @param {Function} cb - run if connect
     */
    onConnect(cb) {
        this.onData('connect', cb);
    }

    /**
     * @method onDisconnect
     * @description Waiting for disconnect
     * @param {Function} cb - run if disconnect
     */
    onDisconnect(cb) {
        this.onData('disconnect', cb);
    }

    /**
     * @method onError
     * @description Waiting for error
     * @param {Function} cb - run if error
     */
    onError(cb) {
        this.onData('error', cb);
    }

}
