import {myFirebase} from '../database/firebase';
import axios from 'axios';


const getUniversities = () => {
   return axios.get('universities.json').then(res => {
        return res.data;
    }).catch(error => {
        return error;
    })
}

export const forumService = {
    getUniversities
};