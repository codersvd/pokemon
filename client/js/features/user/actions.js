export const USER_AUTH = 'USER_AUTH';

/**
 * @function userAuth
 * @description action if send user from server
 * @param user {Object} - user fields
 * @return action {Object}
 */
export function userAuth(user) {
    return {
        type: USER_AUTH,
        user: {
            email: user.email,
            name: user.name
            // @TODO other fields
        }
    };
}

