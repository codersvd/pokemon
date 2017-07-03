export const CHAT_SEND_MESSAGE = 'CHAT_SEND_MESSAGE';
export const CHAT_SHOW_MESSAGES = 'CHAT_SHOW_MESSAGES';
export const CHAT_DELETE_MESSAGE = "CHAT_DELETE_MESSAGE";
export const CHAT_EDIT_MESSAGE = "CHAT_EDIT_MESSAGE";
export const CHAT_SAVE_MESSAGE = "CHAT_SAVE_MESSAGE";

/**
 * @function ChatFormSubmit
 * @description action if send meassage form to server
 * @param form {Object} - chat form
 * @return action {Object}
 */
export function chatFormSubmit(form) {
    return {
        type: CHAT_SEND_MESSAGE,
        form: {
            userId: form.userId,
            message: form.message.value
        },
    };
}

/**
 * @function ChatShowMessages
 * @description Show messages of the chat room
 * @returns {{type: string}}
 */
export function chatShowMessages(messages) {
    return {
        type: CHAT_SHOW_MESSAGES,
        messages
    };
}

/**
 * @function ChatDeleteMessage
 * @param messageId {Number} - message id which we will delete
 * @description Delete a massege in the chat room.
 * @returns {{type: string, id: Number}}
 */
export function chatDeleteMessage(messageId) {
    return {
        type: CHAT_EDIT_MESSAGE,
        id: messageId
    };
}

/**
 * @function ChatEditMessage
 * @param messageId {Number} - message id which we will edit message
 * @description Edit the message in the chat room. Anybody can change only his a message
 * @returns {{type: string, id: Number}}
 */
export function chatEditMessage(messageId) {
    return {
        type: CHAT_EDIT_MESSAGE,
        id: messageId
    };
}

/**
 * @function ChatSaveMessage
 * @param messageId {Number} - message id
 * @description Save a message in the chat room.
 * @returns {{type: string, id: Number}}
 */
export function chatSaveMessage(messageId = null) {
    return {
        type: CHAT_SAVE_MESSAGE,
        id: messageId
    };
}
