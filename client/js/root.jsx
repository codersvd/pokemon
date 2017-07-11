import React from 'react';
import LoginContainer from './features/login/';
import PokemonContainer from './features/pokemon/';
import {BrowserRouter, Route, IndexRoute} from 'react-router-dom';

/**
 * @class RootContainer
 * @description Container for connect features
 */
export default class RootContainer extends React.Component {

    render() {
        let {user, server} = this.props;

        return (
            <BrowserRouter>
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                { (!user.isAuth) ? <LoginContainer/> : "" }
                            </div>
                        </div>
                    </nav>
                    <Route path="/" component={PokemonContainer}/>
                    <Route path="/(:filter)" component={PokemonContainer}/>
                </div>
            </BrowserRouter>
        );
    }

}
