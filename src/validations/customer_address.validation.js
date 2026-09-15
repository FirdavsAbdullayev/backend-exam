const Joi = require('joi');

const customerAddressSchema = Joi.object({
  customer_id: Joi.number().integer().required().messages({
    'number.base': "Mijoz ID si raqam bo'lishi kerak",
    'any.required': "Mijoz ID si kiritilishi shart",
  }),
  name: Joi.string().min(2).max(100).required().messages({
    'string.empty': "Manzil nomi (masalan, Uy, Ishxona) bo'sh bo'lishi mumkin emas",
    'string.min': "Manzil nomi kamida 2 ta belgidan iborat bo'lishi kerak",
    'any.required': "Manzil nomi kiritilishi shart",
  }),
  country: Joi.string().min(2).max(100).required().messages({
    'string.empty': "Davlat nomi bo'sh bo'lishi mumkin emas",
    'any.required': "Davlat nomi kiritilishi shart",
  }),
  region: Joi.string().allow('', null),
  district: Joi.string().allow('', null),
  street: Joi.string().allow('', null),
  house: Joi.string().allow('', null),
  flat: Joi.string().allow('', null),
  location: Joi.string().allow('', null),
  postcode: Joi.string().allow('', null),
  is_main: Joi.boolean().default(false),
});

module.exports = {
  customerAddressSchema,
};