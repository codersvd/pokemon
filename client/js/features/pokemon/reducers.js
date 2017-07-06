import {
    POKEMON_LIST_ALL
} from "./actions";


export default {
    /**
     * @method Pokemon
     * @description reducer of pokemon
     * @param {Object} state
     * @param {Object} action
     * @returns {Object} new state
     */
    pokemon: (state = {}, action) => {
        switch (action.type) {
          case POKEMON_LIST_ALL:
            return {...state, list: action.pokemon};
          default:
                return state;
        }
    }
}
