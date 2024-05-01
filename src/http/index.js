import axios from 'axios';

export default axios.create({
  baseURL: 'http://85.239.244.103/api/',
  headers: {
    "Content-type": "application/json"
  }
});