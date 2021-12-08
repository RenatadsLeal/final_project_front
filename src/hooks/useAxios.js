import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import api from '../services/api';

const useAxios = (url) => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get(url);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        Swal.fire({
            title: error.response,
            icon: 'error',
            text: error.response
        })
      }
    }
    loadData();
  }, [url]);

  return data;
}

export default useAxios;