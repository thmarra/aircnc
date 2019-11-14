const dotenv = require('dotenv');
dotenv.config();

import express, { json } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';
import path from 'path'

const app = express();

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@aircnc-ytpve.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(json());
app.use('/files', express.static(process.env.STORAGE_PATH));
app.use(routes);

app.listen(3333);