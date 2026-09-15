const express = require('express');
const router = express.Router();
const {
  getAllPaymentMethods,
  getPaymentMethodById,
  createPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
} = require('../controllers/payment_method.controller');
const { paymentMethodSchema } = require('../validations/payment_method.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/payment-methods:
 *   get:
 *     summary: Barcha to'lov usullarini olish
 *     tags: [PaymentMethod]
 *     responses:
 *       200:
 *         description: To'lov usullari ro'yxati
 */
router.get('/', getAllPaymentMethods);

/**
 * @swagger
 * /api/payment-methods/{id}:
 *   get:
 *     summary: ID bo'yicha to'lov usulini olish
 *     tags: [PaymentMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: To'lov usuli ma'lumotlari
 *       404:
 *         description: To'lov usuli topilmadi
 */
router.get('/:id', getPaymentMethodById);

/**
 * @swagger
 * /api/payment-methods:
 *   post:
 *     summary: Yangi to'lov usulini qo'shish
 *     tags: [PaymentMethod]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: To'lov usuli muvaffaqiyatli yaratildi
 */
router.post('/', validate(paymentMethodSchema), createPaymentMethod);

/**
 * @swagger
 * /api/payment-methods/{id}:
 *   put:
 *     summary: To'lov usulini yangilash
 *     tags: [PaymentMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: To'lov usuli yangilandi
 */
router.put('/:id', updatePaymentMethod);

/**
 * @swagger
 * /api/payment-methods/{id}:
 *   delete:
 *     summary: To'lov usulini o'chirish
 *     tags: [PaymentMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: To'lov usuli o'chirib yuborildi
 */
router.delete('/:id', deletePaymentMethod);

module.exports = router;