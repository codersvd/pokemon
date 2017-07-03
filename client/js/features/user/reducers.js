import {USER_AUTH} from './actions';

export default {

    /**
     * @method user
     * @description reducer for user
     * @param state {Object} - current state
     * @param action {Object} - current action
     * @returns {Object} new state
     */
    user: (state = {}, action) => {

        if (action.type === USER_AUTH) {
            return {
                ...state,
                isAuth: true,
                email: action.user && action.user.email,
                name: action.user && action.user.name
            };
        }

        return state;

    }

};
