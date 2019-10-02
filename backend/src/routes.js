import { Router } from 'express';
import SessionController from './controllers/SessionController';

const routes = Router();

routes.post('/sessions', SessionController.store);

export default routes;