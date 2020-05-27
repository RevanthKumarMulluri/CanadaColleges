import { useState, useEffect } from 'react';
import { forumService } from '../../services/forum.service';

 const useFetch = (uri) => {
  const [data, setData] = useState({});
  useEffect( () => {
    const fetchData = ()=> {
      forumService.getComments(uri).subscribe(
        res => {
           setData(res.data);
        },
        error => {
          console.log(error);
        }
      );;
     
    };
    fetchData();
}, data);
  return data;
}

export default useFetch;