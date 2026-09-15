const Joi = require('joi');

const regionSchema = Joi.object({
  name: Joi.string().required(),
  code: Joi.string().optional(),
});

module.exports = { regionSchema };