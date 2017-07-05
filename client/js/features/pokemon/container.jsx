import App from '../../app';
import React from 'react';

/**
 * @PokemonContainer - class for login form
 * @state - is object {email, password, remember}
 */

export default class PokemonContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount(){
    App.actions.pokemonListAll();
  }

  render () {
    console.log(this.props);
    return (
      <div className="container">

      </div>
    );
  }
}
