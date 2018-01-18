var express = require('express');
var bitstamp = require('../models/bitstamp');
var router = express.Router();

/* GET users listing. */
router.get('/ping', function (req, res, next) {
  res.json('pong');
});

router.get('/ticker/:currency_pair', function (req, res, next) {
  bitstamp.ticker(req.param.currency_pair).then((response) => {
    res.json(response);
  }).catch((err) => { res.json({ error: err }) });
});

router.get('/transactions/:currency_pair', function (req, res, next) {
  bitstamp.transactions(req.param.currency_pair).then((response) => {
    res.json(response);
  }).catch((err) => { res.json({ error: err }) });
});

router.get('/balance', function (req, res, next) {
  bitstamp.balance().then((response) => {
    res.json(response);
  }).catch((err) => { res.json({ error: err }) });
});

module.exports = router;
