const Joi = require('joi');

const cartSchema = Joi.object({
  customer_id: Joi.number().integer().required(),
  total_amount: Joi.number().precision(2).optional(),
  status: Joi.string().optional(),
});

module.exports = { cartSchema };