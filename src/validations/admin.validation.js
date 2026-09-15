const Joi = require('joi');

const adminSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  is_creator: Joi.boolean().optional(),
  is_active: Joi.boolean().optional(),
});

module.exports = { adminSchema }; 