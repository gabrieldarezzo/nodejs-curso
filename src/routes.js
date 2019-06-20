const express = require('express');

const routes = express.Router();

const ProdudctController = require('./controllers/ProductController');

routes.get('/products', ProdudctController.index);


module.exports = routes;