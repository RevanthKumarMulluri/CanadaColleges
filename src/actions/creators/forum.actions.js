import {forumConstants} from '../constants/forum.constants';
import {forumService} from '../../services/forum.service';

const getUniversities = () => {
    return dispatch => {
        forumService.getUniversities().then(
            data => {
                dispatch (success(data));
            },
            error => {
                dispatch(failure(error))
            }
        );
    }
}

const success = data => {
    return {
        type : forumConstants.UNIVERSITIES,data
    };
}

const failure = error => {
    return {
       
    };
}

export const forumActions ={
    getUniversities
}