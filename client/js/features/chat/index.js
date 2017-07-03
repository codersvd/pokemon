import {connect} from 'react-redux';
import ChatContainer from './container';
import {setupActions, setupMiddlewares, setupReducers} from '../../app';
import {chatFormSubmit, chatDeleteMessage, chatEditMessage, chatShowMessages} from './actions';
import middlewares from './middlewares';
import reducer from './reducers';

setupActions({
    chatFormSubmit,
    chatDeleteMessage,
    chatEditMessage,
    chatShowMessages
});
setupMiddlewares(middlewares);
setupReducers(reducer);

export default connect((state) => {
    return {...state};
})(ChatContainer);
