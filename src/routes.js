const express = require('express');

const UserController = require('./controllers/UserController');

const authMiddleware = require('./middlewares/auth');
const SessionController = require('./controllers/SessionController');
const GitUserController = require('./controllers/GitUserController');
const CommonGitUserController = require('./controllers/CommonGitUserController');

const routes = express.Router();

routes.get('/', UserController.index);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/users/:login', authMiddleware, GitUserController.index);
routes.post('/user', authMiddleware, GitUserController.store);

routes.get('/gitusers', authMiddleware, CommonGitUserController.index);
routes.post('/gitusers/:list', authMiddleware, CommonGitUserController.store);

module.exports = routes;
