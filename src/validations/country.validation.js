const Joi = require('joi');

const countrySchema = Joi.object({
  name: Joi.string().required(),
  code: Joi.string().optional(),
});

module.exports = { countrySchema };