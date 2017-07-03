import React from 'react';
import LoginContainer from './features/login/';
import RegistrationContainer from './features/registration/';

/**
 * @class RootContainer
 * @description Container for connect features
 */
export default class RootContainer extends React.Component {

    render() {
        let {user, server} = this.props;
        /*if (!server.connected) {
            return <div className="container">
                <h1>Server is not connected</h1>
                Error:
                <pre>{JSON.stringify(server.error, null, 4)}</pre>
            </div>;
        }*/
        if (!user.isAuth) {
            return <div>
                <LoginContainer/>
            </div>;
        }
        return <div>
            Interface
            <xmp>{JSON.stringify(user, null, 4)}</xmp>
        </div>;
    }

}
