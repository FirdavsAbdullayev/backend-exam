const Joi = require('joi');

const ticketTypeSchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = { ticketTypeSchema };