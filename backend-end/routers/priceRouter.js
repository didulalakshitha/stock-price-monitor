var express = require('express');
var router = express.Router();
var priceController = require('../controllers/price/priceController');

router.get('/sources', (req, res) => {
  try {
    res.json(priceController.getSources());
  } catch (err) {
    throw new Error('Failed to get sources');
  }
});

router.get('/sources/prices', (req, res) => {
  try {
    res.json(priceController.getPrices());
  } catch (err) {
    console.error(err);
    throw new Error('Failed to get prices');
  }
});

module.exports = router;
