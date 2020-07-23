import React from 'react';
import Button from '../../components/UI/button/Button';
import {Link} from 'react-router-dom';
import classes from './NewForum.module.scss';
import forum from '../../images/forum.png';

const createForum = () =>{
    const styles = {
        width: '500px',

    }
    return (
        <Link to={'/startforum'} className = {classes.forum}>
            <div className={classes.newforum}>
                <img src={forum} className={classes.imagecomposition}/>
            </div>
            <span className={classes.imagetext}>Start A Forum</span>
         </Link>
    )
}
export default createForum;