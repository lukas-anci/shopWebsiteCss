import { useEffect, useState } from 'react';
import axios from 'axios';
export default function useHttp(url) {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://fakestoreapi.com/' + url);
        // console.log(data);
        if (!data) throw new Error('No data came from request');
        setShopData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [url]);
  return shopData;
}
