const express = require('express');
const routes = require('./routes');

const app = express();

/**
 * req.query = acessar query params (filtros, get)
 * req.params = acessar route params (post, put, delete...)
 * req.body = acessar corpo da requisicao (post, put...)
 */

app.use(express.json());
app.use(routes);

app.listen(3333);