import App from '../../../app';
import React from 'react';
import ItemTable from "./itemTable";
import Pagination from "./pagination";

class TableView extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
            return (
                <div className="table-responsive">
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
                        {this.props.list.results.map((curr, i) => {
                          return <ItemTable key={i} pokemon={curr}/>
                        })}
                        </tbody>
                    </table>
                    <Pagination items={this.props.list} onChangePage={this.props.onChangePage} />
                </div>
            );
    }
}

export default TableView;