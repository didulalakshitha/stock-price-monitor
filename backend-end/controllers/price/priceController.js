const { getSources, getPrices } = require('../mockData');

exports.getSources = () => {
  return getSources();
};

exports.getPrices = () => {
  return Object.fromEntries(getPrices());
};
