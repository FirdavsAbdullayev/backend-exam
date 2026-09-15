const Joi = require('joi');

const flatSchema = Joi.object({
  number: Joi.string().required(),
  floor: Joi.number().integer().optional(),
  entrance: Joi.number().integer().optional(),
});

module.exports = { flatSchema };