const Joi = require('joi');

const discountSchema = Joi.object({
  name: Joi.string().min(2).max(100).required().messages({
    'string.empty': "Chegirma nomi bo'sh bo'lishi mumkin emas",
    'string.min': "Chegirma nomi kamida 2 ta belgidan iborat bo'lishi kerak",
    'any.required': "Chegirma nomi kiritilishi shart",
  }),
  // discount_percent o'rniga discount yozildi
  discount: Joi.number().min(0).max(100).required().messages({
    'number.base': "Chegirma foizi raqam bo'lishi kerak",
    'number.min': "Chegirma foizi 0 dan kichik bo'lmasligi kerak",
    'number.max': "Chegirma foizi 100 dan katta bo'lmasligi kerak",
    'any.required': "Chegirma foizi kiritilishi shart",
  }),
  description: Joi.string().allow('', null),
});

module.exports = {
  discountSchema,
};