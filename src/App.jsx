import { useEffect, useState } from 'react';
import './App.css';
import HelloComponent from './components/HelloComponent';
import api from './services/api';

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    // api
    //   .get('/hello')
    //   .then((res) => setHello(res.data))
    //   .catch((err) => console.error(err));
    const fetchData = async () => {
      try {
        const response = await api.get('/hello');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
    console.log(data.content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <HelloComponent />
    </>
  );
}

export default App;
