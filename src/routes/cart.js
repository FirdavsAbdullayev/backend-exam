const express = require('express');
const router = express.Router();
const {
  getAllCarts,
  getCartById,
  createCart,
  updateCart,
  deleteCart,
} = require('../controllers/cart.controller');
const { cartSchema } = require('../validations/cart.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/carts:
 *   get:
 *     summary: Barcha savatchalarni olish
 *     tags: [Cart]
 *     responses:
 *       200:
 *         description: Savatchalar ro'yxati
 */
router.get('/', getAllCarts);

/**
 * @swagger
 * /api/carts/{id}:
 *   get:
 *     summary: ID bo'yicha savatchani olish
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Savatcha ma'lumotlari
 *       404:
 *         description: Savatcha topilmadi
 */
router.get('/:id', getCartById);

/**
 * @swagger
 * /api/carts:
 *   post:
 *     summary: Yangi savatcha qo'shish
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer
 *               total_amount:
 *                 type: number
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Savatcha muvaffaqiyatli yaratildi
 */
router.post('/', validate(cartSchema), createCart);

/**
 * @swagger
 * /api/carts/{id}:
 *   put:
 *     summary: Savatcha ma'lumotlarini yangilash
 *     tags: [Cart]
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
 *               customer_id:
 *                 type: integer
 *               total_amount:
 *                 type: number
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Savatcha yangilandi
 */
router.put('/:id', updateCart);

/**
 * @swagger
 * /api/carts/{id}:
 *   delete:
 *     summary: Savatchani o'chirish
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Savatcha o'chirib yuborildi
 */
router.delete('/:id', deleteCart);

module.exports = router;