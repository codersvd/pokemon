import App from '../../app';
import {POKEMON_LIST_ALL} from './actions';

let getAllInfo = (data, result) =>{
    fetch(data.url).then(res => {
            if (res.status >= 400)
                throw new Error("Server error");
            return res.json();
        })
        .then(res => {
            let poke = {
                id: res.id,
                name: res.name,
                weight: res.weight,
                height: res.height,
                types: res.types,
                img: res.sprites.front_default
            }
            console.log(poke);
            result.push(poke);
        }).catch(error => {
            console.log(error);
        });
};

export default [

    /**
     * @description middleware for action POKEMON_LIST_ALL
     * get data from API and subscribe store
     */
    store => next => action => {
        next(action);
        if (action.type === POKEMON_LIST_ALL) {
            let linkApi = "http://pokeapi.co/api/v2";
            fetch(linkApi + "/pokemon/").then(res => {
              if (res.status >= 400)
                throw new Error("Server error");
              return res.json();
            })
            .then(res => {
                let pokemonList = [];
                res.results.map( (curr, i)=>{
                    getAllInfo(curr, pokemonList);
                });
                res.results = pokemonList;
                action.pokemon = res;
                next(action);
            }).catch(error => {
              console.log(error);
            });
        }
    }
];
