import express from 'express';

import UserController from './controllers/UserController';

import authMiddleware from './middlewares/auth'
import SessionController from './controllers/SessionController';
import GitUserController from './controllers/GitUserController';
import CommonGitUserController from './controllers/CommonGitUserController';

const routes = express.Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/users/:login', GitUserController.index);
routes.post('/user', GitUserController.store);

routes.get('/gitusers', CommonGitUserController.index);
routes.post('/gitusers/:list', CommonGitUserController.store);

export default routes;
