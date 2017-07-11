import App from '../../../app';
import React from 'react';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    onSearchSubmit(e){
        let val = e.target.value.trim();
        if(e.key === "Enter" && val.length >=3 ){
          App.actions.pokemonSearch(val);
        }
    }

    render() {
        return (
            <div>
                <label htmlFor="inputHelpBlock">Pokemon's name (press Enter after text of name)</label>
                <input type="text" id="inputHelpBlock" className="form-control" onKeyPress={this.onSearchSubmit} aria-describedby="helpBlock"/>
            </div>
        );
    }
}
export default SearchInput;