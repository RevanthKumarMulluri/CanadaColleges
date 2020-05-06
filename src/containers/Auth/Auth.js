import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import classes from './Auth.module.css';

class Auth extends Component {
    state = {
        controls: {
            firstName: {
                elementType: 'input',
                label: 'First Name',
                elementConfig: {
                    type: 'text',
                    placeholder: 'First Name'
                },
                value: '',
                validation: {
                    required: true,
                    valid: false,
                    touched:false
                }
            },
            lastName: {
                elementType: 'input',
                label: 'Last Name',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Last Name'
                },
                value: '',
                validation: {
                    required: true,
                    valid: false,
                    touched:false
                }
            },

            email: {
                elementType: 'input',
                label: 'Email',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                    valid: false,
                    touched:false
                }
            },
            password: {
                elementType: 'input',
                label: 'Password',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    valid: false,
                    min:8,
                    max:10,
                    touched:false
                }
            },
            reenterPassword: {
                elementType: 'input',
                label: 'ReEnter Password',
                elementConfig: {
                    type: 'password',
                    placeholder: 'ReEnter Password'
                },
                value: '',
                validation: {
                    required: true,
                    valid: false,
                    touched:false
                }
            }

        },
        errors: {

        }
    }

    inputChangedHandler = (event,eleName) => {
        event.preventDefault();
        let errors = {} ;
        const updatedForm = {
            ...this.state.controls
        };
        const value = event.target.value;
        const updateFormEle = {...updatedForm[eleName]};
        updateFormEle.value = value;
        updateFormEle.validation.touched = true;
        errors = this.validationCheck(eleName,value);
        if(!errors){
            updateFormEle.validation.valid = true;
        }else{
            updateFormEle.validation.valid = false;
        }
        updatedForm[eleName] = updateFormEle;
        this.setState({controls:updatedForm,errors:errors})
    }

    resetErrors = (name) => {
        this.setState({errors:{[name]:''}});
    }

    validationCheck = (name,value) => {
        const ele = this.state.controls[name];
        let errors;
        let requiredMsg = '%name%  is required';
        let lenMsg = '%name% should be %len% %min% charecter length';
                if(!this.requiredValidCheck(value,ele.validation.required)){
                    requiredMsg = requiredMsg.replace('%name%',name);
                    errors = {
                        [name] : requiredMsg
                    }
                }
                if(!this.minCheck(value,ele.validation.min)){
                    lenMsg = lenMsg.replace('%name%',name);
                    lenMsg = lenMsg.replace('%min%',ele.validation.min);
                    lenMsg = lenMsg.replace('%len%','minimun');
                    errors = {
                        [name] : lenMsg
                    }
                }
                if(!this.maxCheck(value,ele.validation.max)){
                    lenMsg = lenMsg.replace('%name%',name);
                    lenMsg = lenMsg.replace('%min%',ele.validation.max);
                    lenMsg = lenMsg.replace('%len%','maximun');
                    errors = {
                        [name] : lenMsg
                    }
                }
               
        
        return errors;
    }

    requiredValidCheck = (value,required) => {
        let isValid = true;
        if(required){
            isValid = value.trim() !== '' && isValid;
        }
       return isValid;
    }
    minCheck = (value,min) =>{
        let isValid = true;
        if(min){
            isValid = value.length >= min && isValid;
        }
        return isValid;
    } 
    maxCheck = (value,max) =>{
        let isValid = true;
        if(max){
            isValid = value.length <= max && isValid;
        }
        return isValid;
    } 
    render() {
        const formEleArray = [];
        const error = [];
        for (let key in this.state.controls) {
            if(key==='errors'){
                continue;
            }
            formEleArray.push(
                {
                    id: key,
                    config: this.state.controls[key]
                }
            );
        }
        let form = (<Form><h1>Sign Up</h1>
                       
                        {formEleArray.map(ele =>
                            <Input key={ele.id} elementType={ele.config.elementType}
                                label={ele.config.label}
                                elementConfig={ele.config.elementConfig}
                                value={ele.config.value}  changed={(event) => this.inputChangedHandler(event,ele.id)}
                                error={this.state.errors ? this.state.errors[ele.id] : null} validation={ele.config.validation}/>
                        )
                        }
                    </Form>);
        return (
            <div className={classes.form}>
                {form}
            </div>
        );
    }
}

export default Auth;