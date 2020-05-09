import React from 'react';
import { Redirect,Route } from 'react-router';
import {useSelector} from 'react-redux';



export const PrivateRoute = ({component: Component,...rest}) => {
    
    const  {loggedIn}  = useSelector(state => ({
        loggedIn: state.auth.loggedIn
    }))

   return (
    <Route {...rest} 
            render = { props => 
                loggedIn ? (<Component {...props} />) : (<Redirect to='/login'/>)
            }
            />
   ); 
}