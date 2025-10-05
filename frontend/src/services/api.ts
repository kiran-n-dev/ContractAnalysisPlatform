import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api', // This will be the backend URL
});

export default api;
