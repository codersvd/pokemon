import App from '../../app';
import React from 'react';
import Facebook from './components/facebookLogin';

/**
 * @LoginContainer - class for login form
 * @state - is object {email, password, remember}
 */

export default class LoginContainer extends React.Component {
  constructor (props) {
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
      },
      remember: {
        value: false
      }
    };
  }

    /**
     * It's function submit of data from form
     * @param e - is context of form
     */
  submitHandler (e) {
    e.preventDefault();
    App.actions.loginFormSubmit(this.form);
  }

    /**
     * Function of change from inputs
     * @param e - is context of input
     */
  changeHandler (e) {
    let {type, name, value, checked} = e.target;
    value = type === 'checkbox' ? checked : value;
    this.form[name].value = value;
  }

  render () {
    return <div className="container">
            <div className="login-form">
                <h2>Login form</h2>
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
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" name="remember"
                                   onChange={e => this.changeHandler(e)}/> Remember
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Facebook/>
                </form>
            </div>
        </div>
  }
}
