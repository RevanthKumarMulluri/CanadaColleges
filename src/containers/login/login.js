import React, { useState } from 'react';
import classes from './login.module.css';
import { useDispatch } from 'react-redux';
import {userActions} from '../../actions/creators/user.actions';


const Login = () => {

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    const dispatch = useDispatch();


    const handleChange = e => {
        const {name,value} = e.target;
        setInputs(inputs => ({...inputs,[name] : value}));
    }

    const submitHandler = e => {
        e.preventDefault();
        setSubmitted(true);
        if(username && password){
            dispatch(userActions.login(username,password));
        }
    };


    return (
        <div className='col-lg-8 offset-lg-2'>
            <h2>Login</h2>
            <form name='form' onSubmit={submitHandler}>
                <div className={'form-group ' + classes.formGroup}>
                    <label className={classes.formLabel}>Username</label>
                    <input type='text' name='username' value={username}  onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                    {submitted && !username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className={'form-group ' + classes.formGroup}>
                    <label className={classes.formLabel}>Password</label>
                    <input type='password' name='password' value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className='invalid-feedback'>Password is required</div>
                    }
                </div>
                <div className={'form-group ' + classes.formGroup}>
                    <button className='btn btn-primary'>
                       {/* {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
                        Login
                    </button>
                </div>
            </form> 
        </div>

    );

}

export default Login;