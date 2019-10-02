const dotenv = require('dotenv');
dotenv.config();

import express, { json } from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@aircnc-ytpve.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

/**
 * req.query = acessar query params (filtros, get)
 * req.params = acessar route params (post, put, delete...)
 * req.body = acessar corpo da requisicao (post, put...)
 */
app.use(json());
app.use(routes);

app.listen(3333);