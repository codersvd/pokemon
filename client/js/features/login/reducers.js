import {
   LOGIN_FORM_FACEBOOK,
   LOGIN_FORM_SUBMIT,
   LOGIN_ERROR
} from "./actions";


export default {
    /**
     * @method Chat
     * @description reducer of chat
     * @param {Object} state
     * @param {Object} action
     * @returns {Object} new state
     */
    user: (state = {}, action) => {
        switch (action.type) {
            case LOGIN_FORM_SUBMIT:
                return {...state, form: action.form};
            case LOGIN_FORM_FACEBOOK:
                return {
                    ...state,
                    name: action.user.name
                };
            case LOGIN_ERROR:
                return {
                    ...state,
                    error: "Login error"
                }
            default:
                return state;
        }
    }
}
