const express = require('express');
const UserController = require('./controllers/UserController');
const MissionController = require('./controllers/MissionController');
const routes = express.Router();

routes.post('/users', UserController.store);
routes.post('/missions', MissionController.store);
routes.post('/missions', MissionController.index);

module.exports = routes;