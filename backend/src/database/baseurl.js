const axios = require('axios');

const baseurl = axios.create({
  baseURL: "http://localhost:4000",
});

module.exports = baseurl;