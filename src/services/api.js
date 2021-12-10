import axios from 'axios';

const api = axios.create({
  baseURL: 'https://infraiiidh.herokuapp.com/'
  // baseURL: 'http://t1g1-env.eba-8t7mp53x.us-east-1.elasticbeanstalk.com/'
  // baseURL: 'http://localhost:8080'
});

export default api;