const Joi = require('joi');

const bookingSchema = Joi.object({
  cart_id: Joi.number().integer().required(),
  payment_method_id: Joi.number().integer().required(),
  delivery_method_id: Joi.number().integer().required(),
  discount_id: Joi.number().integer().optional(),
  status_id: Joi.number().integer().required(),
});

module.exports = { bookingSchema };