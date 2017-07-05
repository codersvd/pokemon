import App from '../../../app';
import React from 'react';
import ItemTable from "./itemTable";

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
                            console.log(curr);
                            return <ItemTable key={i} pokemon={curr}/>
                        })}
                        </tbody>
                    </table>
                </div>
            );
    }
}

export default TableView;