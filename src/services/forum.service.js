import {myFirebase} from '../database/firebase';
import axios from 'axios';
import axiosob from 'axios-observable';


const getUniversities = () => {
   return axios.get('universities.json').then(res => {
        return res.data;
    }).catch(error => {
        return error;
    })
}

const addComment = (uniname,comment) => {
    return axios.post('/'+uniname+'/comments.json',comment).then( res => {
        return res.data;
    }).catch(error => {
        return error;
    })
}

const getComments = (uniname) => {
    return axios.get('/'+uniname+'/comments.json').
    then(res => {
        return res.data;
    }).catch(error => {
        return error;
    })
}

export const forumService = {
    getUniversities,addComment,getComments
};