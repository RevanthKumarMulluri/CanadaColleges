import  React  from "react";
import { Redirect,Route } from 'react-router';
import {useSelector} from 'react-redux';

export const UnAuthRoute = ({component:Component,...remaining}) => {
    const  {loggedIn} = useSelector(state => ({
        loggedIn: state.auth.loggedIn
    }));
    console.log( loggedIn);
    return (
        <Route {...remaining} 
                render = { props => 
                    loggedIn ?  (<Redirect to='/'/>) : (<Component {...props} />) 
                }
                />
       ); 
}