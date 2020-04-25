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
                    valid: false
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
                    valid: false
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
                    valid: false
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
                    valid: false
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
                    valid: false
                }
            }

        }
    }

    inputChangedHandler = (event) => {
        console.log(event);
    }
    render() {
        const formEleArray = [];
        for (let key in this.state.controls) {
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
                                value={ele.config.value}  changed={this.inputChangedHandler}/>
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