import axios from 'axios';

const baseURL = "";

const instance = axios.create({
  baseURL,
});

export default instance;
