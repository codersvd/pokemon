import {
    SERVER_CONNECTED,
    SERVER_DISCONNECTED,
    SERVER_ERROR
} from './actions';

export default {

    /**
     * @method server
     * @description reducer for server
     * @param state {Object} - current state
     * @param action {Object} - current action
     * @returns {Object} new state
     */
    server: (state = {}, action) => {
        if (action.type === SERVER_CONNECTED) {
            return {...state, connected: true, error: null};
        }

        if (action.type === SERVER_DISCONNECTED) {
            return {...state, connected: false};
        }

        if (action.type === SERVER_ERROR) {
            return {...state, connected: false, error: action.error};
        }

        return state;

    }

};
