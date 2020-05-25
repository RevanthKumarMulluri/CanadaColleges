import { useState, useEffect } from 'react';
import { forumService } from '../../services/forum.service';

 const useFetch = (uri) => {
  const [data, setData] = useState({});
  useEffect(async () => {
    const res = await forumService.getComments(uri);
    setData(res);
}, []);
console.log(data);
  return data;
}

export default useFetch;