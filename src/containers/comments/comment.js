import React, { useState, useEffect } from 'react';
import classes from './comment.module.scss';


const Comment = () => {
    let name = 'hello';
    let message = 'how are you';
    let time = 'time';
    return (

        <div className={'container '+classes.parentdiv}>
            <div className={'row bg-light border '+classes.comment}>
                <div className={'col col-md-1 '+classes.image}>
                    {name.charAt(0).toUpperCase()}
                </div>

                <div className='col col-md'>
                    <small className='float-right text-muted'>{time}</small>
                    <h6 className='mt-0 mb-1 text-muted'>{name}</h6>
                    {message}
                </div>
            </div>

        </div>
    )
}

export default Comment;