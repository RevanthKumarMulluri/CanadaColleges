import React from 'react';
import classes from './commentlist.module.scss';
import Comment from './comment';

const CommentList = (props) => {
    console.log(props.comments);
let commentsHtml =  (<React.Fragment>{props.comments.map((comment) => 
        <Comment name={comment.displayName} commentText={comment.CommentText}/>
)}</React.Fragment>);

    return (
       {commentsHtml}
    )
}

export default CommentList;