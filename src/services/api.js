import axios from 'axios';

const api = axios.create({
  baseURL: 'http://t1g1-env.eba-8t7mp53x.us-east-1.elasticbeanstalk.com/'
});

export default api;