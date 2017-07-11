export const POKEMON_LIST_ALL = 'POKEMON_LIST_ALL';
export const POKEMON_SEARCH = 'POKEMON_SEARCH';

/**
 * @function pokemonlistAll
 * @description action to get all pokemons
 * @return action {Object}
 */
export function pokemonListAll(page) {
    return {
        type: POKEMON_LIST_ALL,
        page: page - 1,
        pokemon: {}
    };
}

/**
 * @function pokemonSearch
 * @description action to search pokemon from all list
 * @return action {Object}
 */
export function pokemonSearch(nameOrId) {
  return {
    type: POKEMON_SEARCH,
    name: nameOrId,
    pokemon: {}
  };
}