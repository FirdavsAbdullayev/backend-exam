const Joi = require('joi');

const venueTypeSchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = { venueTypeSchema };