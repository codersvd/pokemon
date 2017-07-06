export const POKEMON_LIST_ALL = 'POKEMON_LIST_ALL';

/**
 * @function pokemonlistAll
 * @description action to get all pokemons
 * @return action {Object}
 */
export function pokemonListAll() {
  return {
        type: POKEMON_LIST_ALL,
        pokemon: {}
    };
}