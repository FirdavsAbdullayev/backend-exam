const Joi = require('joi');

const genderSchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = { genderSchema }; 