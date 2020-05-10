import React from 'react';
import classes from './Button.module.scss';

const button = (props) => {
    let ele = null;
    switch(props.elementType) {
        case ('btn') : 
            ele = <button className={'btn mr-2 text-uppercase'} {...props}>{props.children}</button>;
            break;
        case ("btn-outline") :
            ele = <button className={'btn mr-2 text-uppercase border border-dark '+classes.Outline} {...props}>{props.children}</button>;
            break;
        default : 
            ele = <button className={'btn mr-2 text-uppercase'} {...props}>{props.children}</button>;
            break;
    }   
    return (
                <React.Fragment>{ele}</React.Fragment>
    );
}

export default button;