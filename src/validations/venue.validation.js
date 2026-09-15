const Joi = require('joi');

const venueSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  location: Joi.string().optional(),
  site: Joi.string().optional(),
  phone: Joi.string().optional(),
  venue_type_id: Joi.number().integer().required(),
  region_id: Joi.number().integer().required(),
  district_id: Joi.number().integer().required(),
});

module.exports = { venueSchema };