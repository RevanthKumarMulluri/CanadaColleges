import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import classes from './getForum.module.scss';
import Comment from '../comments/comment';
import  Button  from '../../components/UI/button/Button';

const GetForum = () => {
    const { uniname } = useParams();
    console.log(useParams());
    return (
        <React.Fragment>
            <header>
                <h2 className={'h2 ' + classes.heading}>{uniname}</h2>
            </header>
            <div className={classes.comment}>
                <Comment></Comment>
            </div>
            <Button elementType='btn'>Comment</Button> 
        </React.Fragment>

    );
}

export default GetForum;