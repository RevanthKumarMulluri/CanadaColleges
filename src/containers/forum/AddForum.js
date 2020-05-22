import React, { useState,useEffect } from 'react';
import Button from '../../components/UI/button/Button';
import {forumActions} from '../../actions/creators/forum.actions';
import classes from './AddForum.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const AddForum = () => {
    const styles = {
        width: '500px'
    }

    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const { data } = useSelector(state => ({
        data: state.forum.data,
    }));

    const [match, setMatch] = useState([]);

    useEffect(() => {
        dispatch(forumActions.getUniversities());
    },[]);

    const changeHandler = e => {
        const value = e.target.value.trim();
        setName(value);
        if (value) {
           const uniNames = Object.keys(data);
           const regex = new RegExp('.*'+value,'i');
           let match = uniNames.filter(uni => {
               if(regex.test(uni)){
                    return uni;
               } 
            })
           setMatch(match);
        }else {
            setMatch([]);
        }
    }

    const suggestionSelected = (ele) => {
        setName(ele);
        setMatch([]);
    }

    let matchHtml = (<ul className='list-group'>
        {match.map((ele,id) =>
             <li className='list-group-item' onClick={() => suggestionSelected(ele)} key={id}>{ele}</li>
         )}
     </ul>); 

    return (
        <div className={classes.parentdiv}>
            <div className={'form-group '+classes.formGroup}>
                <input className={'form-control'} type='text' value={name} name='clgname' onChange={changeHandler} placeholder="Select A College or University" />
                {matchHtml}
            </div>
            <div className={classes.buttondiv}> 
                <Button style={styles}>START</Button>
            </div>
        </div>
    );
}
export default AddForum;