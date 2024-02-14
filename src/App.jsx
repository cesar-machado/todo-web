import { useEffect, useState } from 'react';
import './App.css';
import api from './services/api';

function App() {
  const [hello, setHello] = useState({});

  useEffect(() => {
    api
      .get('/hello')
      .then((res) => setHello(res.data))
      .catch((err) => console.error(err));
    console.log(hello.content);
  }, []);
  return (
    <div>
      <h1>{hello.content}</h1>
    </div>
  );
}

export default App;
