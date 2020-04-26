import React from 'react';
import classes from './Input.module.css';
const input = (props) => {
    let inputEle = null;
    const inputClasses = ['form-control'];
    console.log(props)
    if(!props.validation.valid && props.validation.touched){
        inputClasses.push(classes.borderSolid);
        inputClasses.push('border border-danger');
    }
    switch(props.elementType) {
        case ('input') : 
            inputEle = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
    }

    return (
            
                <div className={'form-group '+classes.formGroup} controlId = { props.id } >
                    <label for={props.key} className={classes.formLabel}>{props.label}</label>
                    {inputEle}
                 </div>
           
    );
}

export default input;