var express = require('express');
var bitstamp = require('../models/bitstamp');
var router = express.Router();

/* GET users listing. */
router.get('/ping', function (req, res, next) {
  res.json('pong');
});

router.get('/ticker/:currency_pair', function (req, res, next) {
  bitstamp.ticker(req.params.currency_pair).then((response) => {
    res.json(response);
  }).catch((err) => { res.json({ error: err }) });
});

router.get('/transactions/:currency_pair', function (req, res, next) {
  bitstamp.transactions(req.params.currency_pair).then((response) => {
    res.json(response);
  }).catch((err) => { res.json({ error: err }) });
});

router.get('/balance/:currency_pair', function (req, res, next) {
  bitstamp.balance(req.params.currency_pair).then((response) => {
    res.json(response);
  }).catch((err) => { res.json({ error: err }) });
});

router.get('/user_transactions/:currency_pair', function (req, res, next) {
  bitstamp.user_transactions(req.params.currency_pair).then((response) => {
    res.json(response);
  }).catch((err) => { res.json({ error: err }) });
});

router.post('/cancel_order', function (req, res, next) {
  bitstamp.cancel_order(req.body.id).then((response) => {
    res.json(response);
  }).catch((err) => { res.json({ error: err }) });
});

router.get('/order_statuss/:order_id', function (req, res, next) {
  bitstamp.order_status(req.params.order_id).then((response) => {
    res.json(response);
  }).catch((err) => { res.json({ error: err }) });
});

router.post('/buy/', function (req, res, next) {
  bitstamp.buy(req.body.currency_pair, req.body.amount, req.body.price, req.body.limit_price, req.body.type).then((response) => {
    res.json(response);
  }).catch((err) => { res.json({ error: err }) });
});

router.post('/sell/', function (req, res, next) {
  bitstamp.sell(req.body.currency_pair, req.body.amount, req.body.price, req.body.limit_price, req.body.type).then((response) => {
    res.json(response);
  }).catch((err) => { res.json({ error: err }) });
});

module.exports = router;
