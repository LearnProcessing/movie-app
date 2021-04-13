const axios = require('axios')

const movies = axios.create({
    baseURL: 'http://www.omdbapi.com'
  })



  module.exports = { movies }
