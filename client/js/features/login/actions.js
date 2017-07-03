export const LOGIN_FORM_SUBMIT = 'LOGIN_FORM_SUBMIT';
export const LOGIN_FORM_FACEBOOK = 'LOGIN_FORM_FACEBOOK';

/**
 * @function loginFormSubmit
 * @description action if send login form to server
 * @param form {Object} - login form
 * @return action {Object}
 */
export function loginFormSubmit(form) {
    return {
        type: LOGIN_FORM_SUBMIT,
        from: {
            email: form.email.value,
            password: form.password.value,
            remember: form.remember.value
        }
    };
}

/**
 * @function loginFormFacebook
 * @description action if send login facebook to server
 * @param form {Object} - login Facebook
 * @return action {Object}
 */
export function loginFormFacebook(user) {
    console.log(user);
    return {
        type: LOGIN_FORM_FACEBOOK,
        user: {
            email: user.email,
            name: user.name,
            id: user.id
        }
    };
}
