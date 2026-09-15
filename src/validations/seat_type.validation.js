const Joi = require('joi');

const seatTypeSchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = { seatTypeSchema };