import React from 'react';
import classes from './Navbar.module.scss';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {userActions} from '../../actions/creators/user.actions';
import logo from '../../images/Cc.png';
import icon from '../../images/symbol-defs.svg';
import pic from '../../images/user.jpg';




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
        let innerHTML = <Link className={classes.user_nav_link} to='/login'>
                            <svg className={classes.user_nav_icon}>
                                <use xlinkHref={icon + '#icon-login'}> </use>
                            </svg>
                            <span className={classes.user_nav_text}>Login</span>
                        </Link>;
        if(loggedIn){
            innerHTML =    <React.Fragment>
                                <div className={classes.user_nav_icon_box}>
                                    <svg className={classes.user_nav_icon}>
                                        <use xlinkHref={icon + '#icon-chat'}> </use>
                                    </svg>
                                    <span className={classes.user_nav_notifications}>7</span>
                                </div>
                                <div className={classes.user_nav_icon_box}>
                                    <div className={classes.user_nav_user}>
                                        <img src={pic} alt="userPhoto" className={classes.user_nav_userphoto} />
                                    </div>
                                    <span className={classes.user_nav_username}>{user.displayName}</span>
                                    <svg className={classes.user_nav_icon}>
                                        <use xlinkHref={icon + '#icon-circle-down'}> </use>
                                    </svg>
                                </div>
                            </React.Fragment>
        }
        return innerHTML;
    }

    const logOutHandler = () => {
        dispatch(userActions.logOut());

    }
    return (
        <header className={classes.nav_header}>
            <div className={classes.logo}>
                <img src={logo} className={classes.logo_img} alt='' />
                <span className={classes.logo_text}>CanadaColleges</span>
            </div>
            <form className={classes.nav_serach}>
                <input type='text' className={classes.nav_search_input} placeholder="Search Colleges" />
                <button className={classes.search_button}>
                    <svg className={classes.user_nav_icon}>
                        <use xlinkHref={icon + '#icon-magnifying-glass'}> </use>
                    </svg>
                </button>
            </form>
            <nav className={classes.user_nav}>
                <UserLoginHandler/>
            </nav>
        </header>  
    );
}

export default Navbar;