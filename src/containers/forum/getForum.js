import React,{useEffect,useState,Suspense} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import classes from './getForum.module.scss';
import CommentList from '../comments/CommentList';
import NewComment from '../comments/NewComment';


const GetForum = () => {
    const { uniname } = useParams();
    const { user, loggedIn } = useSelector(state => ({
        user: state.auth.user,
        loggedIn: state.auth.loggedIn
    }));
   
    
    return (
        <React.Fragment>
           
            <header>
                <h2 className={'h2 ' + classes.heading}>{uniname}</h2>
            </header>
            <div className={classes.comment}>
            <CommentList uniname={uniname}></CommentList>
            </div>
             {loggedIn ? 
            <NewComment uniname={uniname}/>:
            <div>Please Login To Comment</div>
            }
        </React.Fragment>

    );
}

export default GetForum;
