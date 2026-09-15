const Joi = require('joi');

const sectorSchema = Joi.object({
  name: Joi.string().required(),
  venue_id: Joi.number().integer().required(),
});

module.exports = { sectorSchema };