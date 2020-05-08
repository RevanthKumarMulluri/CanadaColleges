import AuthReducer from './authentication.reducer';
import RegisterReducer from './register.reducer';
import {combineReducers } from 'redux';

const rootReducer = combineReducers ({
    auth :AuthReducer,
    register : RegisterReducer
})

export default rootReducer;