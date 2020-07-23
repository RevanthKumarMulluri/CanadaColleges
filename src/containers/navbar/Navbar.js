import React from 'react';
import classes from './Navbar.module.scss';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {userActions} from '../../actions/creators/user.actions';
import logo from '../../images/Cc.png';




const Navbar = () => {
    const { user, loggedIn } = useSelector(state => ({
        user: state.auth.user,
        loggedIn: state.auth.loggedIn
    }));
    const dispatch = useDispatch();
    const history = useHistory();

    const logoutHandler = () => {
        dispatch(userActions.logOut(user));
        history.push('/');
    }


    const UserLoginHandler = () => {
        let innerHTML =  <Link className='nav-link' to='/login'>SIGN IN</Link>;
        if(loggedIn){
            innerHTML =  <div className='nav-item dropdown'>
                            <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                 {user.displayName}
                            </a>
                            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                <button className='dropdown-item dropdown btn btn-outline' onClick={logoutHandler}>LOGOUT</button>
                            </div>
                        </div>
        }
        return innerHTML;
    }

    const logOutHandler = () => {
        dispatch(userActions.logOut());

    }
    return (
      <div className={classes.container}>
          <div className={classes.bgimage}>
            <nav className={'navbar navbar-expand-lg ' + classes.navColor}>
            <div className={classes.logo}>
                <img src={logo}  className='d-inline-block align-top mx-2' alt=''/>
            </div> 
                <Link className='navbar-brand' to='/'>
                    CanadaColleges
                </Link>
                <Link className='nav-link' to='/'>STUDY</Link>

                <div className={'collapse navbar-collapse col-md-4 ml-auto'} id="navbarNav">                   
                    <UserLoginHandler/>
                    <form className='form-inline my-2 my-lg-0'>
                        <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
                        <button className='btn btn-outline-light my-2 my-sm-0' type='submit'>Search</button>
                    </form>
                </div>
            </nav>
        </div>
     </div>  
        
    );
}

export default Navbar;