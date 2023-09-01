const router = require("express").Router();

const {
  getCurrencies,
  getCurrencyByName,
} = require("../controllers/currencies.controller");
const {
  minValueParam,
  symbolQueryError,
} = require("../middlewares/currenciesMiddleware");

router.get("/", minValueParam, getCurrencies);
router.get("/:happy", symbolQueryError, getCurrencyByName);

module.exports = router;
