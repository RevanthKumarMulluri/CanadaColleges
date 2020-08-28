import React, { useRef, useEffect } from 'react';
import classes from './modal.module.scss';
import Button from '../button/Button';
import useOnClickOutside from '../../customhooks/useOnClickOutside';

const LoginModal = (props) => {
    const testarearef = useRef();
    const modalref=useRef();
    useOnClickOutside(modalref,testarearef);
    useEffect(()=>{
        testarearef.current.focus();
    },[])
    return(
        <div className={classes.modal} ref={modalref}>
            <div className={classes.modal_content}>
                
                <label for='Textarea'>Comment</label>
                <textarea ref={testarearef} className={'form-control '+classes.modal_textarea} id='Textarea' placeholder='Enter Your Comment Here'></textarea>
                <div className={classes.modal_footer}>
                    <Button elementType='btn' data-dismiss='modal'>Close</Button>
                    <Button elementType='btn'>Save changes</Button>
                </div>
               
            </div> 
        </div>
    );
}

export default LoginModal;