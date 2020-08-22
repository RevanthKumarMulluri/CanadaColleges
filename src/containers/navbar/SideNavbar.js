import  React  from 'react';
import classes from './SideNavbar.module.scss';
import { Link } from 'react-router-dom';
import icon from '../../images/symbol-defs.svg';

const SideNavbar = () => {
    
    return (
        <nav className={classes.sidebar}>
            <ul className={classes.side_nav}>
               <li className={classes.side_nav_item}>
                    <Link className={classes.side_nav_link} to='/'>
                        <svg className={classes.side_nav_icon}>
                            <use xlinkHref={icon + '#icon-home'}> </use>
                        </svg>
                        <span className={classes.side_nav_text}>Home</span>
                    </Link>
               </li>
               <li className={classes.side_nav_item}>
               <Link className={classes.side_nav_link} to='/'>
                        <svg className={classes.side_nav_icon}>
                            <use xlinkHref={icon + '#icon-key'}> </use>
                        </svg>
                       <span className={classes.side_nav_text}>Colleges</span>
                    </Link>
                </li>
                <li className={classes.side_nav_item}>
                    <Link className={classes.side_nav_link} to='/'>
                        <svg className={classes.side_nav_icon}>
                            <use xlinkHref={icon + '#icon-map'}> </use>
                        </svg>
                       <span className={classes.side_nav_text}>Forum</span>
                    </Link>
                </li>
            </ul>
        </nav>
        
    );
}

export default SideNavbar;

