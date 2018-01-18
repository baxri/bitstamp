var Bitstamp = require('bitstamp');
var bitstamp = new Bitstamp('56456456', '43545435', '34545434545435');

// bitstamp.key = '';
// bitstamp.secret = '';
// bitstamp.client_id = '';

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

module.exports.balance = function () {
    return new Promise((resolve, reject) => {
        bitstamp.balance((err, trades) => {
            if (err)
                reject(err)
            else
                resolve(trades);
        });

    });
};

