const express = require('express');
const router = express.Router();
const {
  getAllDeliveryMethods,
  getDeliveryMethodById,
  createDeliveryMethod,
  updateDeliveryMethod,
  deleteDeliveryMethod,
} = require('../controllers/delivery_method.controller');
const { deliveryMethodSchema } = require('../validations/delivery_method.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/delivery-methods:
 *   get:
 *     summary: Barcha yetkazib berish usullarini olish
 *     tags: [DeliveryMethod]
 *     responses:
 *       200:
 *         description: Yetkazib berish usullari ro'yxati
 */
router.get('/', getAllDeliveryMethods);

/**
 * @swagger
 * /api/delivery-methods/{id}:
 *   get:
 *     summary: ID bo'yicha yetkazib berish usulini olish
 *     tags: [DeliveryMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Yetkazib berish usuli ma'lumotlari
 *       404:
 *         description: Yetkazib berish usuli topilmadi
 */
router.get('/:id', getDeliveryMethodById);

/**
 * @swagger
 * /api/delivery-methods:
 *   post:
 *     summary: Yangi yetkazib berish usulini qo'shish
 *     tags: [DeliveryMethod]
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
 *         description: Yetkazib berish usuli muvaffaqiyatli yaratildi
 */
router.post('/', validate(deliveryMethodSchema), createDeliveryMethod);

/**
 * @swagger
 * /api/delivery-methods/{id}:
 *   put:
 *     summary: Yetkazib berish usulini yangilash
 *     tags: [DeliveryMethod]
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
 *         description: Yetkazib berish usuli yangilandi
 */
router.put('/:id', updateDeliveryMethod);

/**
 * @swagger
 * /api/delivery-methods/{id}:
 *   delete:
 *     summary: Yetkazib berish usulini o'chirish
 *     tags: [DeliveryMethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Yetkazib berish usuli o'chirib yuborildi
 */
router.delete('/:id', deleteDeliveryMethod);

module.exports = router;