import React from 'react';
import classes from './commentlist.module.scss';
import Comment from './comment';
import useFetch from '../../components/customhooks/useFetch';

const CommentList = (props) => {
  const comments = useFetch(props.uniname);
  let commentsHtml = null;
    if(comments){
        let keys = Object.keys(comments);
        commentsHtml = (<React.Fragment>
        {keys.map((key) =>
             <Comment key={key} name={comments[key].displayName} commentText={comments[key].commentText}></Comment>
         )}
     </React.Fragment>); 
        
    }
 
    return (
    <div>{commentsHtml}</div>
    )
}

export default CommentList;