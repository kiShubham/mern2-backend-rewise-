const Joi = require("joi");

// creating schema
const schema = Joi.object()
  .keys({
    age: Joi.number().integer().min(0).max(100),
    gender: Joi.string().valid("male", "female"),
  })
  .or("age", "gender");

//validating data with schema
//data- Input - {gender:x , age: 123}
const getQueryError = (data) => {
  const result = schema.validate(data); //<------validate;
  return result.error;
};

module.exports = { getQueryError };
