import App from '../../../app';
import React from 'react';
import FacebookLogin from 'react-facebook-login';

class MyComponent extends React.Component {
    responseFacebook(response) {
        let userObject = {
            email: response.email,
            accessToken: response.accessToken,
            id: response.userID,
            name: response.name
        }
        App.actions.loginFormFacebook(userObject);
    }

    render() {
        return (
            <FacebookLogin
                appId="1925871511032482"
                autoLoad={false}
                fields="name,email,picture"
                scope="public_profile, email"
                callback={this.responseFacebook}
                textButton="Login FB"
                cssClass ="btn btn-primary facebook"
            />
        )
    }
}

export default MyComponent;