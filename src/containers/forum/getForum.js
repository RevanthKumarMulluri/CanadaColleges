import React,{useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import classes from './getForum.module.scss';
import CommentList from '../comments/CommentList';
import NewComment from '../comments/NewComment';
import useFetch from '../../components/customhooks/useFetch';

const GetForum = () => {
    const { uniname } = useParams();
    const { user, loggedIn } = useSelector(state => ({
        user: state.auth.user,
        loggedIn: state.auth.loggedIn
    }));
   
   const comments = useFetch(uniname);
    
    console.log(comments);
    return (
        <React.Fragment>
           
            <header>
                <h2 className={'h2 ' + classes.heading}>{uniname}</h2>
            </header>
            <div className={classes.comment}>
                {/* <CommentList comments = {comments}></CommentList> */}
            </div>
             {loggedIn ? 
            <NewComment uniname={uniname}/>:
            <div>Please Login To Comment</div>
            }
        </React.Fragment>

    );
}

export default GetForum;
