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
  }

  render () {
    return <div className="container">
            <Facebook/>
        </div>
  }
}
