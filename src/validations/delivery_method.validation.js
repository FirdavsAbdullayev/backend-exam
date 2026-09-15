const Joi = require('joi');

const deliveryMethodSchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = { deliveryMethodSchema };