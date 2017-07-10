import App from '../../app';
import {POKEMON_LIST_ALL} from './actions';

/**
 * @function Pokemon
 * @param {Object} data - info of pokemon
 */
function Pokemon(data) {
    this.id = data.id;
    this.name = data.name;
    this.weight = data.weight;
    this.height = data.height;
    this.types = data.types;
    this.img = data.sprites.front_default;
};

/**
 * @function getAllInfo
 * @description get info of each pokemon from API
 * @param data
 * @returns {Promise}
 */
let getAllInfo = (data) => {
    return fetch(data.url).then(res => {
        if (res.status >= 400)
            throw new Error("Server error");
        return res.json();
    })
        .then(res => {
            let poke = new Pokemon(res);
            return poke;
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
            if (!sessionStorage.getItem("pokemons" + action.page)) {
                fetch(linkApi + "/pokemon/?offset=" + (action.page * 20)).then(res => {
                    if (res.status >= 400)
                        throw new Error("Server error");
                    return res.json();
                })
                    .then(res => {
                        Promise.all(res.results.map(curr => {
                            return getAllInfo(curr);
                        })).then(val => {
                            res.results = val;
                            action.pokemon = res;
                            sessionStorage.setItem("pokemons" + action.page, JSON.stringify(res));
                            next(action);
                        });
                    }).catch(error => {
                    console.log(error);
                });
            }
            else {
                action.pokemon = JSON.parse(sessionStorage.getItem("pokemons" + action.page));
                next(action);
            }
        }
    }
];
