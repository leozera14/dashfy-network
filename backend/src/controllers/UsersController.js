const baseurl = require('../database/baseurl');

module.exports = {
  async index(req, res) {
    try {
     await baseurl.get('/users')
        .then(function(response) {
          res.status(200).json(response.data);
        })
    } catch (error) {
      res.status(400).json({ error: `${error}` })
    }
  },

  async userInfo(req, res) {
   const id = req.headers.id;

   try {
     await baseurl.get(`/users/${id}`)
      .then(function(response) {
        res.status(200).json(response.data);
      })
   } catch (error) {
     
   }
  },

  async search(req, res) {
    const search = req.body.searchInputValue;

    try {
      await baseurl.get(`/users?q=${search}`)
        .then(function(response) {
          res.status(200).json(response.data);
        })
    } catch (error) {
      res.status(400).json({ error: `${error}`})
    }
  }
}