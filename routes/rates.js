var express = require('express');
const libProcessMessages = require('../lib/libProcessMessages');
const rateService = require('../services/rateService');

var router = express.Router();

router.get('/rates', async function (req, res, next) {
    try {
        res.json(await rateService.getRates());
    } catch (error) {
        libProcessMessages.error(res,error.message);
    }
});

module.exports = router;