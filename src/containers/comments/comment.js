import React, { useState, useEffect } from 'react';
import classes from './comment.module.scss';


const Comment = () => {
    let name = 'hello';
    let message = 'how are you';
    let time = 'time';
    return (

        <div className={'media mb-3 '+classes.comment}>
            <img
                className={'mr-3 bg-light rounded '+classes.image}
                width='60'
                height='60'
                src={`https://api.adorable.io/avatars/48/${name.toLowerCase()}@adorable.io.png`}
                alt={name}
            />

            <div className='media-body p-2 shadow-sm rounded bg-light border'>
                <small className='float-right text-muted'>{time}</small>
                <h6 className='mt-0 mb-1 text-muted'>{name}</h6>
                {message}
            </div>
        </div>
    )
}

export default Comment;