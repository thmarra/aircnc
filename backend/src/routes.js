import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';

import BookingController from './controllers/BookingController';
import DashboardController from './controllers/DashboardController';
import SessionController from './controllers/SessionController';
import SpotController from './controllers/SpotController';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/dashboard', DashboardController.show);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.post('/spots/:spotID/bookings', BookingController.store);

export default routes;