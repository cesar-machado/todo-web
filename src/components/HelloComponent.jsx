import { useEffect, useState } from 'react';
import axios from 'axios';

export default function HelloComponent() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // import.meta.env.VITE_APP_URL + '/hello'
          'http://localhost:8080/hello'
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {' '}
      <h1>{data.content}</h1>
    </div>
  );
}
