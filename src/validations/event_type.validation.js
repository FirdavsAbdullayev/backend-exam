const Joi = require('joi');

const eventTypeSchema = Joi.object({
  name: Joi.string().required(),
  parent_event_type_id: Joi.number().integer().optional(),
});

module.exports = { eventTypeSchema };