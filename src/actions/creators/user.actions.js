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
                dispatch(failure(error.toStrng()))
            }
        );
    }
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
    login
};