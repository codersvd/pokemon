import App from '../../app';
import {POKEMON_LIST_ALL} from './actions';

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
              action.pokemon = res;
              next(action);
            }).catch(error => {
              console.log(error);
            });
        }
    }
];
