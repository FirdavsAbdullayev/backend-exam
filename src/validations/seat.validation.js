const Joi = require('joi');

const seatSchema = Joi.object({
  seat_number: Joi.string().required(),
  row_number: Joi.string().required(),
  sector_id: Joi.number().integer().required(),
  venue_id: Joi.number().integer().required(),
  seat_type_id: Joi.number().integer().required(),
  status_id: Joi.number().integer().optional(),
});

module.exports = { seatSchema };