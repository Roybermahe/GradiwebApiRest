var express = require('express');
const libProcessMessages = require('../lib/libProcessMessages');
const productService = require('../services/productService')
var router = express.Router();

router.get('/products/:rate', async function(req, res, next) {
  try {
    res.json(await productService.getProducts(req.params.rate));
  } catch (error) {
    libProcessMessages.error(res,error.message);
  }
});

router.get('/products/:rate/:id', async function(req, res, next) {
  try {
    res.json(await productService.getProduct(req.params.id, req.params.rate));
  } catch (error) {
    libProcessMessages.error(res,error.message);
  }
});

module.exports = router;