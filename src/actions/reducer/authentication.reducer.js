import { userConstants } from '../constants/user.constants';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? { loggedIn: true, user } : {};

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            localStorage.setItem('user',JSON.stringify(action.user));
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {
                error : action.error
            };
        case userConstants.LOGOUT:
            localStorage.removeItem('user')
            return {};
        default:
            return state
    }
};

export default authenticationReducer;