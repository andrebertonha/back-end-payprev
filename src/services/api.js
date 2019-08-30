const axios = require('axios');

axios.defaults.headers.common['Authorization'] = 'Bearer 001899f6-358d-4b4c-8df6-3e8aa8145c7a';

const api = axios.create({
  baseURL: 'https://api.github.com'
});

module.exports = api;
