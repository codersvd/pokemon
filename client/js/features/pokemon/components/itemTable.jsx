import App from '../../../app';
import React from 'react';

class ItemTable extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
           <tr>
               <td>{this.props.pokemon.id}</td>
               <td><img src={this.props.pokemon.img} alt=""/></td>
               <td>{this.props.pokemon.name}</td>
               <td>{this.props.pokemon.weight}</td>
               <td>{this.props.pokemon.height}</td>
               <td>{this.props.pokemon.types.map((curr, i)=>{
                   return <span className="pokemon-type">{curr.type.name}</span>;
               })}</td>
           </tr>
        );
    }
}

export default ItemTable;