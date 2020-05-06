import {myFirebase} from '../database/firebase';

const login = (username,password) => {
    return myFirebase.auth()
    .signInWithEmailAndPassword(username,password)
    .then(res => {
        console.log(res);
        //return res;
    }).catch(error => {
        console.log(error);
    })
}

export const userService = {
    login
};