const Joi = require('joi');

const humanCategorySchema = Joi.object({
  name: Joi.string().required(),
  start_age: Joi.number().integer().optional(),
  finish_age: Joi.number().integer().optional(),
  gender: Joi.string().optional(),
});

module.exports = { humanCategorySchema };