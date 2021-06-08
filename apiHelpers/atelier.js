const endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax'; //note that all endpoints must contain a '/' after 'hr-lax'
const credentials = require('../config.js')
// import credentials from '../config.js'
const axios = require ('axios');

module.exports = {
  getProducts: function() {
    return axios({
      method: 'GET',
      url: `${endpoint}/products`,
      headers: { 'Authorization': credentials.TOKEN },
    })
    .then(res => {
      console.log(res.data)
      return res.data;
    })
    .catch(err => {
      console.log(err)
      return err;
    })
  },

  getProductById: function(product_id) {
    return axios({
      method: 'GET',
      url: `${endpoint}/products/${product_id}`,
      headers: { 'Authorization': credentials.TOKEN },
    })
    .then(res => {
      console.log(res.data)
      return res.data
    })
    .catch(err => {
      console.log(err)
      return err;
    })
  },

  getStlyesById: function(product_id) {
    return axios({
      method: 'GET',
      url: `${endpoint}/products/${product_id}/styles`,
      headers: { 'Authorization': credentials.TOKEN },
    })
    .then(res => {
      console.log(res.data)
      return res.data
    })
    .catch(err => {
      console.log(err)
      return err;
    })
  },

  getRelatedProductsById: function(product_id) {
    return axios({
      method: 'GET',
      url: `${endpoint}/products/${product_id}/related`,
      headers: { 'Authorization': credentials.TOKEN },
    })
    .then(res => {
      console.log(res.data)
      return res.data
    })
    .catch(err => {
      console.log(err)
      return err;
    })
  },

  getReviews: function(product_id, sort_order) {
    const params = new URLSearchParams({ sort: sort_order, product_id: `${product_id}`, })
    return axios({
      method: 'GET',
      url: `${endpoint}/reviews?${params}`,
      headers: { 'Authorization': credentials.TOKEN },
    })
    .then(res => {
      // console.log(res.data.results)
      return res.data
      // this.updateReviews(data)
    })
    .catch(err => {
      console.log(err)
      return err
    })
  // callback(null, "hello from getReviews!")
  },

};

