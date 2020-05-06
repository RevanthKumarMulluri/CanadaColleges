import AuthReducer from './authentication.reducer';
import {combineReducers } from 'redux';

const rootReducer = combineReducers ({
    auth :AuthReducer
})

export default rootReducer;