import React from 'react';
import Button from '../../components/UI/button/Button';
import {Link} from 'react-router-dom';
import classes from './NewForum.module.scss';

const createForum = () =>{
    const styles = {
        width: '500px'
    }
    return (
        <Link to={'/startforum'} className = {classes.forum}>
            <Button style={styles} elementType='btn-outline'>Start A Forum</Button> 
        </Link>
    )
}
export default createForum;