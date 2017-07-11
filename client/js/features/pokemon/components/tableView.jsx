import App from '../../../app';
import React from 'react';
import ItemTable from "./itemTable";
import Pagination from "./pagination";
import Search from "./serachInput";

class TableView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="table-responsive">
                <Search/>
                <table className="table">
                    <thead>
                    <tr>
                        <td>#</td>
                        <td>Avatar</td>
                        <td>Name</td>
                        <td>Weight</td>
                        <td>Height</td>
                        <td>Types</td>
                    </tr>
                    </thead>
                    <tbody>
                    { (this.props.list.results.length>0) ? (this.props.list.results.map((curr, i) => {
                        return <ItemTable key={i} pokemon={curr}/>
                    })): <tr><td colSpan="6"><h2>Not found</h2></td></tr> }
                    </tbody>
                </table>
                <Pagination items={this.props.list} currentPage={this.props.page}
                            onChangePage={this.props.onChangePage}/>
            </div>
        );
    }
}

export default TableView;