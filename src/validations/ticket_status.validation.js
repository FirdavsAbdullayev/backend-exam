const Joi = require('joi');

const ticketStatusSchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = { ticketStatusSchema };