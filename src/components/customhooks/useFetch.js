import { useState, useEffect } from 'react';
import { forumService } from '../../services/forum.service';

 const useFetch = (uri) => {
  const [data, setData] = useState({});
  useEffect( () => {
    const fetchData = async ()=> {
      const res = await forumService.getComments(uri);
      setData(res);
    };
    fetchData();
}, []);
  return data;
}

export default useFetch;