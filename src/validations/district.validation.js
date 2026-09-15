const Joi = require('joi');

const districtSchema = Joi.object({
  name: Joi.string().required(),
  region_id: Joi.number().integer().required(),
});

module.exports = { districtSchema };