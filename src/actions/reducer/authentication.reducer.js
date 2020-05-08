import { userConstants } from '../constants/user.constants';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? { logedIn: true, user } : {};

const authenticationReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {
                error : action.error
            };
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
};

export default authenticationReducer;