const dotenv = require('dotenv');
dotenv.config();

import express, { json } from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@aircnc-ytpve.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(json());
app.use(routes);

app.listen(3333);