import {connect} from 'react-redux';
import PokemonContainer from './container';
import {setupActions, setupMiddlewares, setupReducers} from '../../app';
import {pokemonListAll} from './actions';
import reducer from './reducers';
import middlewares from './middlewares';

/**
 * Registration actions
 * Take object of actions
 */
setupActions({
    pokemonListAll
});
/**
 * Registration middlewares
 * Take array
 */
setupMiddlewares(middlewares);
setupReducers(reducer);

export default connect((state) => {
    return {...state};
})(PokemonContainer);
