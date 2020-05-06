import React from 'react';
import classes from './Input.module.css';


const input = (props) => {
    let inputEle = null;
    let invalidEle = null;
    const inputClasses = ['form-control'];
    if(!props.validation.valid && props.validation.touched){
        inputClasses.push(' is-invalid');
        invalidEle = <div className='invalid-feedback'>{props.error}</div>;
    }
    switch(props.elementType) {
        case ('input') : 
            inputEle = <input className={inputClasses.join(' ')}  {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
         default : break;   

    }

    return (
            
                <div className={'form-group '+classes.formGroup} >
                    <label className={classes.formLabel}>{props.label}</label>
                    {inputEle}
                    {invalidEle}
                 </div>
           
    );
}

export default input;