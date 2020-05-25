import { forumConstants } from '../constants/forum.constants';



const initialState = {};

const forumReducer = (state = initialState, action) => {
    switch (action.type) {
        case forumConstants.UNIVERSITIES:
            return {
                ...state,
                universities: action.data
            };   
        default:
            return state
    }
};

export default forumReducer;