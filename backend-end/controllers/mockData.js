var moment = require('moment');

const DATE_FORMAT = 'YYYY-MM-DD hh:mm:ss';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min) / 100; //The maximum is inclusive and the minimum is inclusive
}

function getSources() {
  return [{
    source: 'SRC1',
    tickers: ['TA1', 'TA2'],
  }, {
    source: 'SRC2',
    tickers: ['TB1', 'TB2'],
  }];
};

const prices = new Map();
prices.clear();

function generatePrices() {
  getSources().forEach((tickerValues) => {
    tickerValues.tickers.forEach((tickerCode) => {
      const priceArr = [];
      for(let i = 0; i < 5; i++) {
        priceArr.push({time: moment().subtract(i, 'seconds').format(DATE_FORMAT), price: getRandomIntInclusive(10, 200)})
      }
      prices.set(tickerCode, priceArr);
    })
  });
}
generatePrices();

function getPrices() {
  return prices;
};

module.exports = { getSources, getPrices, generatePrices };