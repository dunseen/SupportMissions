const express = require('express');
const UserController = require('./controllers/UserController');
const MissionController = require('./controllers/MissionController');
const RegisterController = require('./controllers/RegisterController');
const AuthController = require('./controllers/AuthController');
const ProjectController = require('./controllers/ProjectController');
const AuthMiddleware = require('./middlewares/Auth')
const routes = express.Router();


routes.post('/users', UserController.store);
routes.post('/auth', AuthController.store);
routes.post('/missions', MissionController.store);
routes.post('/register', RegisterController.store);
routes.get('/missions', MissionController.index);
routes.get('/project', AuthMiddleware, ProjectController.index);

module.exports = routes;