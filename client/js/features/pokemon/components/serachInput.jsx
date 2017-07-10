import App from '../../../app';
import React from 'react';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <label className="sr-only" htmlFor="inputHelpBlock">Input with help text</label>
            <input type="text" id="inputHelpBlock" className="form-control" aria-describedby="helpBlock"/>
        </div>
    }
}
export default SearchInput;