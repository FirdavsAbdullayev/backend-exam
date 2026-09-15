const Joi = require('joi');

const langSchema = Joi.object({
  name: Joi.string().required(),
  code: Joi.string().required(),
});

module.exports = { langSchema };