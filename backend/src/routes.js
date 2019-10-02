const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({ message: "Hello!" });
});

module.exports = routes;