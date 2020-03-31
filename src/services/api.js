import axios from 'axios';

const back = 'be-the-hero2.herokuapp.com/'

const api = axios.create({
  baseURL: `http://192.168.0.119:${back}`
});

export default api;