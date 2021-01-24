const express = require('express');

const routes = express.Router();

const UsersController = require('./controllers/UsersController');

routes.get("/users", UsersController.index);
routes.get("/userInfo", UsersController.userInfo);

routes.post("/search", UsersController.search);

module.exports = routes;