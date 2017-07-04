import App from '../../app';
import {CHAT_FORM_SUBMIT} from './actions';

export default [

    /**
     * @description middleware for action LOGIN_FORM_SUBMIT
     * connect server and subscribe store
     */
    store => next => action => {
        next(action);
        if (action.type === CHAT_FORM_SUBMIT) {
            // @TODO validation
            App.actions.serverSend(action);
        }
    }

];