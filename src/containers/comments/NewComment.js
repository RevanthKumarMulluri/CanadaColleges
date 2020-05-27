import React, { useState, useRef } from 'react';
import Button from '../../components/UI/button/Button';
import { forumService } from '../../services/forum.service';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


const NewComment = (props) => {
    const [commentText, setCommentText] = useState('');
    const { user, loggedIn } = useSelector(state => ({
        user: state.auth.user,
        loggedIn: state.auth.loggedIn
    }));
    const modal = useRef(null);
    const history = useHistory();
    const [showModal, setShowModal] = useState(true);
    let modalClose = null;

    const addCommentsHandler = () => {
        const comment = {
            commentText: commentText,
            email: user.email,
            displayName: user.displayName
        }
        if (commentText) {
            forumService.addComment(props.uniname, comment).then(res => {
                 props.update();
                history.push('/forums/' + props.uniname);

            }).catch(e => {
                console.log(e);
            })


        }
    }

    const changeHandler = event => {
        setCommentText(event.target.value);
    }
    
    return (
        <React.Fragment>
            <Button elementType='btn' data-toggle='modal' data-target='#exampleModal'>
                Comment
            </Button>

            <div className={'modal'} style={modalClose} ref={modal} id='exampleModal' role='dialog' aria-labelledby='ModalLabel' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='ModalLabel'>{props.uniname}</h5>
                            <Button elementType='btn' className='close' data-dismiss='modal' aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </Button>
                        </div>
                        <div className='modal-body mb-3'>
                            <label for='Textarea'>Comment</label>
                            <textarea className='form-control' id='Textarea' value={commentText} onChange={changeHandler} placeholder='Enter Your Comment Here'></textarea>
                        </div>
                        <div className='modal-footer'>
                            <Button elementType='btn' data-dismiss='modal'>Close</Button>
                            <Button elementType='btn' onClick={addCommentsHandler}>Save changes</Button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}


export default NewComment;