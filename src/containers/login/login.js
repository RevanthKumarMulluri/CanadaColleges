import React, { useState } from 'react';
import classes from './login.module.scss';
import { useDispatch,useSelector } from 'react-redux';
import { userActions } from '../../actions/creators/user.actions';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from '../../images/symbol-defs.svg';



const Login = () => {

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [disable, setDisable] = useState(true);
    const { username, password } = inputs;
    const dispatch = useDispatch();
    const history = useHistory();
    
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

    const googleLoginHandler = event => {
        event.preventDefault();
        dispatch(userActions.loginWithGoogle());
        history.push('/');
    };


    return (
        <div className={classes.header}>
            <div className={classes.login}>
                <form className={classes.login_form}  name='form' onSubmit={submitHandler}>
                    <h5 className={classes.login_form_title}>Login</h5>
                    <div className={classes.login_form_group}>
                        <input type='email' name='username' value={username} onChange={handleChange} className={classes.login_form_group_input} onfocus='this.placeholder=""' placeholder='Email or User Name' />
                        <label className={classes.login_form_group_label_username}></label>
                        {submitted && !username &&
                            <div className="invalid-feedback">Username is required</div>
                        }
                    </div>
                    <div className={classes.login_form_group}>
                        <input type='password' name='password' value={password} onChange={handleChange} className={classes.login_form_group_input} placeholder='Password' />
                        <label className={classes.login_form_group_label_password}></label>
                        {submitted && !password &&
                            <div className='invalid-feedback'>Password is required</div>
                        }
                    </div>
                    <button type='submit' disabled={disable} className={classes.login_button}>Login</button>
                    <span className={classes.or}>OR</span>
                    <button className={classes.login_google} onClick={googleLoginHandler}>
                        <svg className={classes.login_google_icon}>
                            <use xlinkHref={icon + '#icon-google'}></use>
                        </svg>
                        <span>login With Google</span>
                    </button>
                </form>
            </div>
        </div>
    );

}

export default Login;