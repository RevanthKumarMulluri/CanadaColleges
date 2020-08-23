import React, { useState } from 'react';
import classes from './login.module.scss';
import { useDispatch,useSelector } from 'react-redux';
import { userActions } from '../../actions/creators/user.actions';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/UI/button/Button';


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
        // <div className='col-lg-8 offset-lg-2'>
        //     <div className="card card-signin my-5">
        //         <div className="card-body">
        //             <h5 className="card-title text-center">Sign In</h5>
        //             <form name='form' onSubmit={submitHandler}>
        //                 <div className={'form-group ' + classes.formGroup}>
        //                     <label className={classes.formLabel}>Email address</label>
        //                     <input type='email' name='username' value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
        //                     {submitted && !username &&
        //                         <div className="invalid-feedback">Username is required</div>
        //                     }
        //                 </div>
        //                 <div className={'form-group ' + classes.formGroup}>
        //                     <label className={classes.formLabel}>Password</label>
        //                     <input type='password' name='password' value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
        //                     {submitted && !password &&
        //                         <div className='invalid-feedback'>Password is required</div>
        //                     }
        //                 </div>
        //                 <div className={'form-group ' + classes.formGroup}>
        //                     <Button disabled={disable} type='submit'>
        //                         {/* {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
        //                         Sign in
        //                     </Button>
        //                 </div>
        //             </form>
        //             <div className={'float-middle '+classes.formGroup}>
        //                 <Link to={'/register'}>
        //                    <Button elementType='btn-outline'>Click here to Register</Button> 
        //                 </Link>
        //                 <span> OR </span>
        //                 <Button elementType='btn-outline'  onClick={googleLoginHandler} type="submit"> <FontAwesomeIcon  icon={['fab', 'google']} /> Sign in with Google</Button>
                       
        //             </div>
              
        //         </div>
        //     </div>
        // </div>
        <div className={classes.header}>
            <div className={classes.login}>
            <form className={classes.login_form}>
                <h5 className={classes.login_form_title}>Login</h5>
                <div className={classes.login_form_group}>
                    <input type='text' className={classes.login_form_group_input} onfocus='this.placeholder=""' placeholder='Email or User Name' />
                    <label className={classes.login_form_group_label_username}></label>
                </div>
                <div className={classes.login_form_group}>
                    <input type='password' className={classes.login_form_group_input} placeholder='Password' />
                    <label className={classes.login_form_group_label_password}></label>
                </div>
            </form>
            </div>
            <div>

            </div>
        </div>

    );

}

export default Login;