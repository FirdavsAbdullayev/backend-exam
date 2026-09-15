const Joi = require('joi');

const ticketSchema = Joi.object({
  event_id: Joi.number().integer().required(),
  seat_id: Joi.number().integer().required(),
  price: Joi.number().required(),
  vat_percent: Joi.number().required(),
  status_id: Joi.number().integer().required(),
});

module.exports = { ticketSchema };