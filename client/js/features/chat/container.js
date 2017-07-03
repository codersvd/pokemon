import App from '../../app';
import React from 'react';
import ListMessages from "./component/listMessages";

/**
 * @ChatContainer - class for chat form
 * @state - is object {uid, message}
 */

export default class ChatContainer extends React.Component {

    constructor(props) {
        super(props);
        this.messages = [];
        this.form = {
            userId: (Math.random()*100).toFixed(),
            message: {
                value: "",
                error: false,
                validation: "rules" // @TODO validation rules
            }
        };
    }

    /**
     * It's function submit of data from form
     * @param e - is context of form
     */
    submitHandler(e) {
        e.preventDefault();
        this.messages.push({userId: this.form.userId, message: this.form.message.value});
        App.actions.chatFormSubmit(this.form);
        App.actions.chatShowMessages(this.messages);
        e.target.querySelector("textarea").value = "";
    }

    /**
     * Function of change from inputs
     * @param e - is context of input
     */
    changeHandler(e) {
        let {type, name, value, checked} = e.target;
        value = type === 'checkbox' ? checked : value;
        this.form.message.value = value;
    }

    render() {
        return <div className="container">
            <div className="login-form">
                <div className="listMessages">
                    <ListMessages messages={this.messages}/>
                </div>
                <h2>Send message</h2>
                <form className="form" onSubmit={e => this.submitHandler(e)}>
                    <div className="form-group">
                        <label htmlFor="inputMessage">Message</label>
                        <textarea name="message" className="form-control" id="inputMessage"
                                  onChange={e => this.changeHandler(e)}></textarea>

                    </div>
                    <button type="submit" className="btn btn-primary">Send message</button>
                </form>
            </div>
        </div>;
    }

}
