import React, { useState } from 'react';
import classes from './login.module.css';
import { useDispatch } from 'react-redux';
import { userActions } from '../../actions/creators/user.actions';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Login = () => {

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [disable, setDisable] = useState(true);
    const { username, password } = inputs;
    const dispatch = useDispatch();


    const handleChange = e => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
        if(username || password){
            setDisable(false);
        }else{
            setDisable(true);
        }
    }

    const submitHandler = e => {
        e.preventDefault();
        setSubmitted(true);
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    };


    return (
        <div className='col-lg-8 offset-lg-2'>
            <div className="card card-signin my-5">
                <div className="card-body">
                    <h5 className="card-title text-center">Sign In</h5>
                    <form name='form' onSubmit={submitHandler}>
                        <div className={'form-lebel-group ' + classes.formGroup}>
                            <label className={classes.formLabel}>Email address</label>
                            <input type='email' name='username' value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
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
                            <button className='btn btn-primary mr-2 text-uppercase' disabled={disable} type='submit'>
                                {/* {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
                        Sign in
                    </button>
                        </div>
                    </form>
                    <div className={'float-middle '+classes.formGroup}>
                        <Link to={'/register'} className={'btn btn-outline-dark'}>
                            Click here to Register
                        </Link>
                        <span> OR </span>
                        <button className="btn btn-social btn-google btn-outline-dark text-uppercase" type="submit"> <FontAwesomeIcon  icon={['fab', 'google']} /> Sign in with Google</button>
                       
                    </div>
              
                </div>
            </div>
        </div>

    );

}

export default Login;