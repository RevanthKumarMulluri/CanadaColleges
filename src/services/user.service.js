import {myFirebase} from '../database/firebase';
import axios from 'axios';
import {googleLogin} from '../database/firebase';

const login = (username,password) => {
    return myFirebase.auth()
    .signInWithEmailAndPassword(username,password)
    .then(res => {
        return res.user;
    }).catch(error => {
        return error;
    });
}

const loginWithGoogle = () => {
    return googleLogin().then(res => {
        return res.user;
    }).catch(error => {
        return error;
    })
}

const register = (user) => {
     return myFirebase.auth()
        .createUserWithEmailAndPassword(user.email,user.password)
        .then(res => {
            return res.user;
        }).catch(error => {
            console.log(error);
            return error;
        });
}

const addUser = (user,uid) => {
    return axios.put('users/'+uid+'.json',user).then(res => {
        return res;
    }).catch(error => {
       return error;
    });
}

export const userService = {
    login,register,addUser,loginWithGoogle
};