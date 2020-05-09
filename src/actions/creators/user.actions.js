import {userConstants} from '../constants/user.constants';
import { userService } from '../../services/user.service';
import {alertActions} from '../../actions/creators/alert.actions';

const login = (username,password) => {
    return dispatch => {
        userService.login(username,password).then(
            user => {
                dispatch (success(user));
            },
            error => {
                dispatch(failure(error))
            }
        );
    }
}

const loginWithGoogle = () => {
    return dispatch => {
        userService.loginWithGoogle().then(
            user => {
                dispatch (success(user));
            },
            error => {
                dispatch(failure(error))
            }
        );
    }
}

const register = (user) => {
    return dispatch => {
        userService.register(user).then(
            res => {
                console.log(res);
                dispatch (registerSuccess(res));
            },error => {
                console.log(error);
                dispatch (registerFailure(error));
            }    
        );
    }
}

const addUser = (user,uid) => {
    return dispatch => {
        userService.addUser(user,uid).then(
            res => {
                console.log(res);
                dispatch (registerSuccess(res));
            },error => {
                console.log(error);
                dispatch (registerFailure(error));
            }    
        );
    }
}

const logOut = (user) => {
    return {
        type : userConstants.LOGOUT,user
    };
}




const registerSuccess = (user) => {
    return {
        type : userConstants.REGISTER_SUCCESS,user
    };
}

const registerFailure = (error) => {
    return {
        type : userConstants.REGISTER_FAILURE,error
    };
}

const success = user => {
    return {
        type : userConstants.LOGIN_SUCCESS,user
    };
}

const failure = error => {
    return {
        type : userConstants.LOGIN_FAILURE,error
    };
}



export const userActions = {
    login,register,addUser,loginWithGoogle,logOut
};