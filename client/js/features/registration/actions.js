export const REGISTRATION_FORM_SUBMIT = 'REGISTRATION_FORM_SUBMIT';

/**
 * @function registrationFormSubmit
 * @description action if send registration form to server
 * @param form {Object} - registration form
 * @return action {Object}
 */
export function registrationFormSubmit(form) {
    return {
        type: REGISTRATION_FORM_SUBMIT,
        form: {
            email: form.email.value,
            password: form.password.value
        }
    };
}
