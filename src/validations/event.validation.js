const Joi = require('joi');

const eventSchema = Joi.object({
  name: Joi.string().required(),
  photo: Joi.string().optional(),
  start_date: Joi.date().required(),
  start_time: Joi.string().required(),
  finish_date: Joi.date().required(),
  finish_time: Joi.string().required(),
  info: Joi.string().optional(),
  event_type_id: Joi.number().integer().required(),
  human_category_id: Joi.number().integer().required(),
  venue_id: Joi.number().integer().required(),
  lang_id: Joi.number().integer().required(),
  release_date: Joi.date().optional(),
});

module.exports = { eventSchema };   