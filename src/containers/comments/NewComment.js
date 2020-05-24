import React from 'react';
import Button from '../../components/UI/button/Button';

const NewComment = (props) => {
    return (
        <React.Fragment>
            <Button elementType='btn' data-toggle='modal' data-target='#exampleModal'>
                Comment
            </Button>

            <div className='modal fade' id='exampleModal' role='dialog' aria-labelledby='ModalLabel' aria-hidden='true'>
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
                            <textarea className='form-control' id='Textarea' placeholder='Enter Your Comment Here' required></textarea>
                        </div>
                        <div className='modal-footer'>
                            <Button elementType='btn' data-dismiss='modal'>Close</Button>
                            <Button elementType='btn'>Save changes</Button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}


export default NewComment;