import App from '../../app';
import React from 'react';
import TableView from "./components/tableView";

/**
 * @PokemonContainer - class for login form
 * @state - is object {pokemon}
 */
export default class PokemonContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1
        };
        this.onChangePage = this.onChangePage.bind(this);
    }

    componentDidMount() {
        App.actions.pokemonListAll(0);
    }

    onChangePage(p) {
        this.setState({page: p});
        App.actions.pokemonListAll(p);
    }

    render() {
        let list = this.props.pokemon.list;
        let loading = "Loading...";
        if (list) {
            return (
                <div className="container">
                    { (Object.keys(list).length) ?
                        <TableView page={this.state.page} onChangePage={this.onChangePage} list={ list }/> : loading}
                </div>
            );
        }

        return <div>{loading}</div>;
    }
}
