import React from 'react';
import classes from './Navbar.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {userActions} from '../../actions/creators/user.actions';



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
        <div>
            <nav className={'navbar navbar-expand-lg ' + classes.navColor}>
                <a className='navbar-brand' href='#'>Brand</a>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item active'>
                            <Link className='nav-link' to='/'>Home <span className='sr-only'>(current)</span></Link>
                        </li>
                    </ul>
                    <UserLoginHandler/>
                    <form className='form-inline my-2 my-lg-0'>
                        <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
                        <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;