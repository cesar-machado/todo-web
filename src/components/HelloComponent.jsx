import { useEffect, useState } from 'react';
import axios from 'axios';

export default function HelloComponent() {
  const [data, setData] = useState({});

  useEffect(() => {
    // api
    //   .get('/hello')
    //   .then((res) => setHello(res.data))
    //   .catch((err) => console.error(err));
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/hello');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
    console.log(data.content);
    // console.log(data.data.content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {' '}
      <h1>{data.content}</h1>
      {/* <h1>Hello, World</h1> */}
      {/* <div>
        <h1>Hello World with Axios</h1>
        {data && (
          <div>
            <h2>Data from API:</h2>
            <p>
              ID: {data.id}, Content: {data.content}
            </p>
          </div>
        )} */}
    </div>
    // </div>
  );
}
