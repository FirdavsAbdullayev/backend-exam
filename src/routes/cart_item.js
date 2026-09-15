const express = require('express');
const router = express.Router();
const {
  getAllCartItems,
  getCartItemById,
  createCartItem,
  updateCartItem,
  deleteCartItem,
} = require('../controllers/cart_item.controller');
const { cartItemSchema } = require('../validations/cart_item.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/cart-items:
 *   get:
 *     summary: Barcha savatcha elementlarini olish
 *     tags: [CartItem]
 *     responses:
 *       200:
 *         description: Savatcha elementlari ro'yxati
 */
router.get('/', getAllCartItems);

/**
 * @swagger
 * /api/cart-items/{id}:
 *   get:
 *     summary: ID bo'yicha savatcha elementini olish
 *     tags: [CartItem]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Savatcha elementi ma'lumotlari
 *       404:
 *         description: Savatcha elementi topilmadi
 */
router.get('/:id', getCartItemById);

/**
 * @swagger
 * /api/cart-items:
 *   post:
 *     summary: Savatchaga yangi element qo'shish
 *     tags: [CartItem]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: integer
 *               ticket_id:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Savatcha elementi muvaffaqiyatli yaratildi
 */
router.post('/', validate(cartItemSchema), createCartItem);

/**
 * @swagger
 * /api/cart-items/{id}:
 *   put:
 *     summary: Savatcha elementi ma'lumotlarini yangilash
 *     tags: [CartItem]
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
 *               cart_id:
 *                 type: integer
 *               ticket_id:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Savatcha elementi yangilandi
 */
router.put('/:id', updateCartItem);

/**
 * @swagger
 * /api/cart-items/{id}:
 *   delete:
 *     summary: Savatcha elementini o'chirish
 *     tags: [CartItem]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Savatcha elementi o'chirib yuborildi
 */
router.delete('/:id', deleteCartItem);

module.exports = router;