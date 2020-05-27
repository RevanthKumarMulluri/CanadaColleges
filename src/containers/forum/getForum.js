import React,{useEffect,useState,Suspense} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import classes from './getForum.module.scss';
import CommentList from '../comments/CommentList';
import NewComment from '../comments/NewComment';
import {forumService} from '../../services/forum.service';

const GetForum = () => {
    const { uniname } = useParams();
    const { user, loggedIn } = useSelector(state => ({
        user: state.auth.user,
        loggedIn: state.auth.loggedIn
    }));
    
    const [update,setUpdate] = useState(false);
    const [comments, setComments] = useState({});


    const updateHandler = () => {
        setUpdate(!update);
    }

    useEffect( () => {
      const fetchData = async ()=> {
        const res = await forumService.getComments(uniname);
        setComments(res);
      };
      fetchData();
  }, [update]);
    
    return (
        <React.Fragment>
           
            <header>
                <h2 className={'h2 ' + classes.heading}>{uniname}</h2>
            </header>
            <div className={classes.comment}>
            <CommentList uniname={uniname} comments={comments}></CommentList>
            </div>
             {loggedIn ? 
            <NewComment uniname={uniname} update={updateHandler}/>:
            <div>Please Login To Comment</div>
            }
        </React.Fragment>

    );
}

export default GetForum;
