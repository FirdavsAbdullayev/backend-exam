const Joi = require('joi');

const customerSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  phone: Joi.string().optional(),
  birth_date: Joi.date().optional(),
  gender: Joi.string().optional(),
  lang_id: Joi.number().integer().optional(),
});

module.exports = { customerSchema };