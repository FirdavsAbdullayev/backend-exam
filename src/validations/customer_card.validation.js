const Joi = require('joi');

const customerCardSchema = Joi.object({
  customer_id: Joi.number().integer().required().messages({
    'number.base': 'Mijoz ID si raqam bo\'lishi kerak',
    'any.required': 'Mijoz ID si kiritilishi shart',
  }),
  name: Joi.string().min(2).max(100).required().messages({
    'string.empty': 'Karta nomi bo\'sh bo\'lishi mumkin emas',
    'any.required': 'Karta nomi kiritilishi shart',
  }),
  phone: Joi.string().required().messages({
    'string.empty': 'Telefon raqami kiritilishi shart',
    'any.required': 'Telefon raqami kiritilishi shart',
  }),
  card_number: Joi.string().length(16).required().messages({ // O'zgargan joy
    'string.length': 'Karta raqami 16 ta raqamdan iborat bo\'lishi kerak',
    'any.required': 'Karta raqami kiritilishi shart',
  }),
  year: Joi.string().length(2).required().messages({
    'string.length': 'Yil 2 xonali bo\'lishi kerak (masalan: 26)',
    'any.required': 'Yil kiritilishi shart',
  }),
  month: Joi.string().length(2).required().messages({
    'string.length': 'Oy 2 xonali bo\'lishi kerak (masalan: 09)',
    'any.required': 'Oy kiritilishi shart',
  }),
  is_active: Joi.boolean().default(true),
  is_main: Joi.boolean().default(false),
});

module.exports = {
  customerCardSchema,
};