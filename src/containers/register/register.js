import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import classes from './register.module.scss';
import {connect} from 'react-redux';
import { userActions } from '../../actions/creators/user.actions';
import Button from '../../components/UI/button/Button';

class Register extends Component {
   
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

    inputSubmitHandler = () => {
        // const user = {
        //     firstName : this.state.controls['firstName'].value,
        //     lastName : this.state.controls['lastName'].value,
        //     email : this.state.controls['email'].value,
        //     password : this.state.controls['password'].value
        // }
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
        const touched = [];
        for (let key in this.state.controls) {
            if(key==='errors'){
                continue;
            }
           touched.push(this.state.controls[key].validation.touched);
            formEleArray.push(
                {
                    id: key,
                    config: this.state.controls[key]
                }
            );
        }
        let form = (<Form onSubmit={this.inputSubmitHandler}>
                       {formEleArray.map(ele =>
                            <Input key={ele.id} elementType={ele.config.elementType}
                                label={ele.config.label}
                                elementConfig={ele.config.elementConfig}
                                value={ele.config.value}  changed={(event) => this.inputChangedHandler(event,ele.id)}
                                error={this.state.errors ? this.state.errors[ele.id] : null} validation={ele.config.validation}/>
                        )
                        }
                         <div className={'form-group '}>
                            <Button  disabled={touched.includes(false) || this.state.errors }  type='submit'>
                                Sign Up
                            </Button>
                        </div>  
                    </Form>);
        return (
            <div className={classes.form}>
                <div className='col-lg-8 offset-lg-2'>
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Sign Up</h5>
                            {form}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRegister: (user,uid) => dispatch(userActions.addUser(user,uid))
    }
};


export default connect(null,mapDispatchToProps)(Register);