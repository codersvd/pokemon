import React from 'react';
import LoginContainer from './features/login/';

/**
 * @class RootContainer
 * @description Container for connect features
 */
export default class RootContainer extends React.Component {

    render() {
        let {user, server} = this.props;

        return <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    { (!user.isAuth) ? <LoginContainer/> : "" }
                </div>
            </div>
        </nav>
        </div>;
    }

}
