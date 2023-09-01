const Joi = require("joi");

const schema1 = Joi.object().keys({
  min_value: Joi.number().min(0),
});

const schema2 = Joi.object().keys({
  happy: Joi.string().length(3),
});

// validating fn
const getQueryError1 = (data) => {
  const result = schema1.validate(data);
  return result.error;
};

const getQueryError2 = (data) => {
  const result = schema2.validate(data);
  return result.error;
};

module.exports = { getQueryError1, getQueryError2 };
