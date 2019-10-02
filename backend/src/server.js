const dotenv = require('dotenv');
dotenv.config();

import express, { json } from 'express';
import routes from './routes';

const app = express();

/**
 * req.query = acessar query params (filtros, get)
 * req.params = acessar route params (post, put, delete...)
 * req.body = acessar corpo da requisicao (post, put...)
 */
app.use(json());
app.use(routes);

app.listen(3333);