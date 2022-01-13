var express = require('express');
const libProcessMessages = require('../lib/libProcessMessages');
const productService = require('../services/productService')
var router = express.Router();

router.get('/', async function(req, res, next) {
  try {
    res.json(await productService.getProducts());
  } catch (error) {
    libProcessMessages.error(res,error.message);
  }
});

router.get('/:id', async function(req, res, next) {
  try {
    res.json(await productService.getProduct(req.params.id));
  } catch (error) {
    libProcessMessages.error(res,error.message);
  }
});



module.exports = router;
