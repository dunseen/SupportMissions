const express = require('express');
const MissionController = require('./app/controllers/MissionController');
const RegisterController = require('./app/controllers/RegisterController');
const AuthController = require('./app/controllers/AuthController');
const ProjectController = require('./app/controllers/ProjectController');
const AuthMiddleware = require('./app/middlewares/Auth')
const routes = express.Router();


routes.post('/auth', AuthController.store);
routes.get('/missions', MissionController.index);
routes.post('/missions', MissionController.store);
routes.delete('/missions/:id', MissionController.delete);
routes.post('/register', RegisterController.store);
routes.get('/project', AuthMiddleware, ProjectController.index);

module.exports = routes;