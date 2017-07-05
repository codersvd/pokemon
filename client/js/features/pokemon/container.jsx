import App from '../../app';
import React from 'react';
import TableView from "./components/tableView";

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
      return (
      <div className="container">
          { (this.props.pokemon.list) ? <TableView list={this.props.pokemon.list}/> : "Loading..." }
      </div>
    );
  }
}
