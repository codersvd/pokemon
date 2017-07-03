import {connect} from 'react-redux';
import RegistrationContainer from './container';
import {setupActions} from '../../app';
import {registrationFormSubmit} from './actions';

/**
 * Registration actions
 * Take object of actions
 */
setupActions({registrationFormSubmit});

export default connect((state) => {
    return {user: state.user};
})(RegistrationContainer);
