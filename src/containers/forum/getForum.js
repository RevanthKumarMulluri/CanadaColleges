import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams,useHistory } from 'react-router';
import classes from './getForum.module.scss';
import Comment from '../comments/comment';
import NewComment from '../comments/NewComment';

const GetForum = () => {
    const { uniname } = useParams();
    const { user, loggedIn } = useSelector(state => ({
        user: state.auth.user,
        loggedIn: state.auth.loggedIn
    }));
    const history = useHistory();
    return (
        <React.Fragment>
            <header>
                <h2 className={'h2 ' + classes.heading}>{uniname}</h2>
            </header>
            <div className={classes.comment}>
                <Comment></Comment>
            </div>
             {loggedIn ? 
            <NewComment uniname={uniname}/>:
            <div>Please Login To Comment</div>
            }
        </React.Fragment>

    );
}

export default GetForum;
