import {
    CHAT_DELETE_MESSAGE,
    CHAT_EDIT_MESSAGE,
    CHAT_SEND_MESSAGE,
    CHAT_SHOW_MESSAGES,
    CHAT_SAVE_MESSAGE
} from "./actions";


export default {
    /**
     * @method Chat
     * @description reducer of chat
     * @param {Object} state
     * @param {Object} action
     * @returns {Object} new state
     */
    chat: (state = {}, action) => {
        switch (action.type) {
            case CHAT_SEND_MESSAGE:
                return {...state, form: action.form};
            case CHAT_DELETE_MESSAGE:
                return state;
            case CHAT_EDIT_MESSAGE:
                return state;
            case CHAT_SAVE_MESSAGE:
                return state;
            case CHAT_SHOW_MESSAGES:
                return {...state, messages: action.messages };
            default:
                return state;
        }
    }
}
