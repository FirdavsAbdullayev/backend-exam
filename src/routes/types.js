const express = require('express');
const router = express.Router();
const {
  getAllTypes,
  getTypeById,
  createType,
  updateType,
  deleteType,
} = require('../controllers/types.controller');
const { typeSchema } = require('../validations/types.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/types:
 *   get:
 *     summary: Barcha turlarni olish
 *     tags: [Type]
 *     responses:
 *       200:
 *         description: Turlar ro'yxati
 */
router.get('/', getAllTypes);

/**
 * @swagger
 * /api/types/{id}:
 *   get:
 *     summary: ID bo'yicha turni olish
 *     tags: [Type]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tur ma'lumotlari
 *       404:
 *         description: Tur topilmadi
 */
router.get('/:id', getTypeById);

/**
 * @swagger
 * /api/types:
 *   post:
 *     summary: Yangi tur qo'shish
 *     tags: [Type]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tur muvaffaqiyatli yaratildi
 */
router.post('/', validate(typeSchema), createType);

/**
 * @swagger
 * /api/types/{id}:
 *   put:
 *     summary: Tur ma'lumotlarini yangilash
 *     tags: [Type]
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
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tur yangilandi
 */
router.put('/:id', updateType);

/**
 * @swagger
 * /api/types/{id}:
 *   delete:
 *     summary: Turni o'chirish
 *     tags: [Type]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tur o'chirib yuborildi
 */
router.delete('/:id', deleteType);

module.exports = router;