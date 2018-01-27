var Bitstamp = require('bitstamp');
var BitstampConfig = require('../config/bitstamp');

var bitstamp = new Bitstamp(
    BitstampConfig.key, BitstampConfig.secret, BitstampConfig.account_id
);

module.exports.ticker = function (currency_pair) {
    return new Promise((resolve, reject) => {
        bitstamp.ticker(currency_pair, (err, trades) => {
            if (err)
                reject(err)
            else
                resolve(trades);
        });

    });
};

module.exports.transactions = function (currency_pair) {
    return new Promise((resolve, reject) => {
        bitstamp.transactions(currency_pair, (err, trades) => {
            if (err)
                reject(err)
            else
                resolve(trades);
        });

    });
};

module.exports.balance = function (currency_pair) {
    return new Promise((resolve, reject) => {
        bitstamp.balance(currency_pair, (err, trades) => {
            if (err)
                reject(err)
            else
                resolve(trades);
        });

    });
};

module.exports.user_transactions = function (currency_pair) {
    return new Promise((resolve, reject) => {
        bitstamp.user_transactions(currency_pair, (err, trades) => {
            if (err)
                reject(err)
            else
                resolve(trades);
        });

    });
};

module.exports.cancel_order = function (id) {
    return new Promise((resolve, reject) => {
        bitstamp.cancel_order(id, (err, trades) => {
            if (err)
                reject(err)
            else
                resolve(trades);
        });
    });
};

module.exports.order_status = function (id) {
    return new Promise((resolve, reject) => {
        bitstamp.order_status(id, (err, trades) => {
            if (err)
                reject(err)
            else
                resolve(trades);
        });
    });
};

module.exports.buy = function (currency_pair, amount, price, limit_price, type) {
    if (type === 'market') {
        return new Promise((resolve, reject) => {
            bitstamp.buyMarket(currency_pair, amount, (err, trades) => {
                if (err)
                    reject(err)
                else
                    resolve(trades);
            });
        });
    } else {
        return new Promise((resolve, reject) => {
            bitstamp.buy(currency_pair, amount, price, limit_price, (err, trades) => {
                if (err)
                    reject(err)
                else
                    resolve(trades);
            });
        });
    }

};

module.exports.sell = function (currency_pair, amount, price, limit_price, type) {
    if (type === 'market') {
        return new Promise((resolve, reject) => {
            bitstamp.sellMarket(currency_pair, amount, (err, trades) => {
                if (err)
                    reject(err)
                else
                    resolve(trades);
            });
        });
    } else {
        return new Promise((resolve, reject) => {
            bitstamp.sell(currency_pair, amount, price, limit_price, (err, trades) => {
                if (err)
                    reject(err)
                else
                    resolve(trades);
            });
        });
    }
};