import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/',
  // baseURL: 'https://e965-189-121-203-102.ngrok-free.app/',
  // baseURL: 'https://api.github.com',
  // headers: { 'Access-Control-Allow-Origin': '*' },
});

export default api;
