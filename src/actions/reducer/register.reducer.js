import { userConstants } from '../constants/user.constants';



const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return {
               registering : true
            };
        case userConstants.REGISTER_SUCCESS:
            return {
                userId : action.user.uid
            };
        case userConstants.REGISTER_FAILURE:
            return {
                error : action.error
            };
        
         default:
            return state
    }
};

export default registerReducer;