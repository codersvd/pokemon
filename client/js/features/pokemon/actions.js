export const LOGIN_FORM_SUBMIT = 'LOGIN_FORM_SUBMIT';
export const LOGIN_FORM_FACEBOOK = 'LOGIN_FORM_FACEBOOK';
export const LOGIN_ERROR = 'LOGIN_ERROR';

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
 * @param user {Object} - login Facebook
 * @return action {Object}
 */
export function loginFormFacebook(user) {
    return {
        type: LOGIN_FORM_FACEBOOK,
        user: {
            email: user.email,
            name: user.name,
            id: user.id,
            accessToken: user.accessToken
        }
    };
}

/**
 * @function loginError
 * @description action if send error of login
 * @return action {Object}
 */
export function loginError() {
  return {
    type: LOGIN_ERROR
  };
}