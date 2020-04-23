const express = require('express');
const UserController = require('./app/controllers/UserController');
const MissionController = require('./app/controllers/MissionController');
const RegisterController = require('./app/controllers/RegisterController');
const AuthController = require('./app/controllers/AuthController');
const ProjectController = require('./app/controllers/ProjectController');
const AuthMiddleware = require('./app/middlewares/Auth')
const routes = express.Router();


routes.post('/users', UserController.store);
routes.post('/auth', AuthController.store);
routes.post('/missions', MissionController.store);
routes.post('/register', RegisterController.store);
routes.get('/missions', MissionController.index);
routes.get('/project', AuthMiddleware, ProjectController.index);

module.exports = routes;