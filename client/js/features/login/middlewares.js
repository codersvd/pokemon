import App from '../../app';
import {LOGIN_FORM_SUBMIT} from './actions';

export default [

    /**
     * @description middleware for action LOGIN_FORM_SUBMIT
     * connect server and subscribe store
     */
    store => next => action => {
        next(action);
        if (action.type === LOGIN_FORM_SUBMIT) {
            // @TODO validation
            App.actions.serverSend(action);
        }
    }

];
