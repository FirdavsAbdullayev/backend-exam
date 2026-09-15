const Joi = require('joi');

const cartItemSchema = Joi.object({
  cart_id: Joi.number().integer().required(),
  ticket_id: Joi.number().integer().required(),
  quantity: Joi.number().integer().min(1).required(),
});

module.exports = { cartItemSchema };