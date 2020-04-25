import React from 'react';
import {FormGroup,FormLabel,FormText,FormControl} from 'react-bootstrap';
import classes from './Input.module.css';
const input = (props) => {
    let inputEle = null;
    
    switch(props.elementType) {
        case ('input') : 
            inputEle = <FormControl {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
    }

    return (
            
                <FormGroup className={classes.formGroup} controlId = { props.id } >
                    <FormLabel className={classes.formLabel}>{props.label}</FormLabel>
                        {inputEle}
                </FormGroup>
           
    );
}

export default input;