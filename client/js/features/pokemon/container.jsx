import App from '../../app';
import React from 'react';
import TableView from "./components/tableView";

/**
 * @PokemonContainer - class for login form
 * @state - is object {pokemon}
 */
export default class PokemonContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount(){
    App.actions.pokemonListAll();
  }

  render () {
    let list = this.props.pokemon.list;
    let loading = "Loading...";
    if(list) {
      return (
        <div className="container">
          { (Object.keys(list).length) ? <TableView list={ list }/> : loading}
        </div>
      );
    }

    return <div>{loading}</div>;
  }
}
