const currency = require("../currency.json");

//req.query
const getCurrencies = (req, res) => {
  const { min_value } = req.query; // object destructuring ;
  if (min_value) {
    const result = currency.data.filter(
      (e) => Number(e.min_size) >= Number(min_value)
    );
    res.json(result);
  } else {
    res.json(currency);
  }
};

// req.param
const getCurrencyByName = (req, res) => {
  const { happy } = req.params;
  const symbolData = currency.data.filter((e) => e.id == happy.toUpperCase());
  if (symbolData.length) {
    res.json(symbolData);
  } else {
    res.sendStatus(404);
  }
};

module.exports = { getCurrencies, getCurrencyByName };
