const Joi = require('joi');

const venuePhotoSchema = Joi.object({
  venue_id: Joi.number().integer().required(),
  url: Joi.string().required(),
});

module.exports = { venuePhotoSchema };