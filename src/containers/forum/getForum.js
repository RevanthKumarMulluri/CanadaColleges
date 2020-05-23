import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import classes from './getForum.module.scss';
import Comment from '../comments/comment';
import  Button  from '../../components/UI/button/Button';

const GetForum = () => {
    const { uniname } = useParams();
    const { user, loggedIn } = useSelector(state => ({
        user: state.auth.user,
        loggedIn: state.auth.loggedIn
    }));
    const history = useHistory();
    console.log(history)
    return (
        <React.Fragment>
            <header>
                <h2 className={'h2 ' + classes.heading}>{uniname}</h2>
            </header>
            <div className={classes.comment}>
                <Comment></Comment>
            </div>
             {loggedIn ? 
            <Link>
                <Button elementType='btn'>Comment</Button> 
            </Link>:
            <div>Please Login To Comment</div>
            }
        </React.Fragment>

    );
}

export default GetForum;
