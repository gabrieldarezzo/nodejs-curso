const express = require('express');

const routes = express.Router();

const ProdudctController = require('./controllers/ProductController');

routes.get('/products', ProdudctController.index);
routes.get('/products/:id', ProdudctController.show);
routes.post('/products', ProdudctController.store);
routes.put('/products/:id', ProdudctController.update);
routes.delete('/products/:id', ProdudctController.destroy);


module.exports = routes;