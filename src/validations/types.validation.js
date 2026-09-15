const Joi = require('joi');

const typeSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional(),
});

module.exports = { typeSchema };