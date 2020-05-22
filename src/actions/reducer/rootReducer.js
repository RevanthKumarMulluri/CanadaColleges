import AuthReducer from './authentication.reducer';
import RegisterReducer from './register.reducer';
import forumReducer from './forum.reducer';
import {combineReducers } from 'redux';

const rootReducer = combineReducers ({
    auth :AuthReducer,
    register : RegisterReducer,
    forum : forumReducer
})

export default rootReducer;