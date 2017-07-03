import App from '../../app';
import React from 'react';

/**
 * @RegistrationContainer - class for registration form
 * @state - is object {email, password}
 */
export default class RegistrationContainer extends React.Component {

    constructor(props) {
        super(props);
        this.form = {
            email: {
                value: '',
                error: false,
                validation: 'rules' // @TODO validation rules
            },
            password: {
                value: '',
                error: false,
                validation: 'rules' // @TODO validation rules
            }
        };
    }

    submitHandler(e) {
        e.preventDefault();
        App.actions.registrationFormSubmit(this.form);
    }

    render() {
        let user = this.props.user;
        if (user && user.isAuth) {
            return <div/>;
        } else {
            return <div className="container">
                <div className="registration-form">
                    <h2>Sign up</h2>
                    <form className="form" onSubmit={e => this.submitHandler(e)}>
                        <div className="form-group">
                            <label htmlFor="inputEmail">Email address</label>
                            <input id="inputEmail" className="form-control" name="email"
                                   type="text" onChange={e => this.changeHandler(e)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword">Password</label>
                            <input id="inputPassword" className="form-control" name="password"
                                   type="password" onChange={e => this.changeHandler(e)}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>
                </div>
            </div>;
        }
    }

}
