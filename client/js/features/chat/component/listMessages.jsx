import React from 'react';

/**
 * @component Messages
 * @description Component renders all messages
 * @param props {Object} - list of messages
 * @returns {HTML}
 * @constructor
 */
const ListMessages = props =>{
    let messages = props.messages.map((current, index)=>{
        return (
        <li key={index} className="chat-message">
            <div className="chat-message_user">User: {current.userId}</div>
            <div className="chat-message_message">{current.message}</div>
        </li>
        );
    });

    if(messages.length > 0) {

        return (
            <ul className="chat-messages">
                {messages}
            </ul>
        );
    }
    return <div className="chat-empty">No messages in the chat.</div>
};

export default ListMessages;
