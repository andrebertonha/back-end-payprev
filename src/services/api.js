const axios = require('axios');

axios.defaults.headers.common['Authorization'] = 'Bearer c8139381-aea0-487b-9609-8685a5624d73';

const api = axios.create({
  baseURL: 'https://api.github.com'
});

module.exports = api;
