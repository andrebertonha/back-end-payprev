const express = require('express');

const UserController = require('./controllers/UserController');

const authMiddleware = require('./middlewares/auth');
const SessionController = require('./controllers/SessionController');
const GitUserController = require('./controllers/GitUserController');
const CommonGitUserController = require('./controllers/CommonGitUserController');

const routes = express.Router();


routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);

routes.post('/users', UserController.store);

routes.get('/users/:login', GitUserController.index);
routes.post('/user', GitUserController.store);

routes.get('/gitusers', CommonGitUserController.index);
routes.post('/gitusers/:list', CommonGitUserController.store);

module.exports = routes;
