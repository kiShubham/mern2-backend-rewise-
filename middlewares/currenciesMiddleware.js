const {
  getQueryError1,
  getQueryError2,
} = require("../validators/currencies.validators");

const minValueParam = (req, res, next) => {
  const { min_value } = req.query;
  const error = getQueryError1({ min_value });
  if (error) return res.status(422).json(error);

  next();
};

const symbolQueryError = (req, res, next) => {
  const { happy } = req.params;
  const error = getQueryError2({ happy });
  if (error) return res.status(422).json(error);

  next();
};

module.exports = {
  minValueParam,
  symbolQueryError,
};
