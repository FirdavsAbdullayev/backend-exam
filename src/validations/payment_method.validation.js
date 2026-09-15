const Joi = require('joi');

const paymentMethodSchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = { paymentMethodSchema };