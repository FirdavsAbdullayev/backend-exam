const express = require('express');
const router = express.Router();
const {
  getAllFlats,
  getFlatById,
  createFlat,
  updateFlat,
  deleteFlat,
} = require('../controllers/flat.controller');
const { flatSchema } = require('../validations/flat.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/flats:
 *   get:
 *     summary: Barcha xonadonlarni olish
 *     tags: [Flat]
 *     responses:
 *       200:
 *         description: Xonadonlar ro'yxati
 */
router.get('/', getAllFlats);

/**
 * @swagger
 * /api/flats/{id}:
 *   get:
 *     summary: ID bo'yicha xonadonni olish
 *     tags: [Flat]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Xonadon ma'lumotlari
 *       404:
 *         description: Xonadon topilmadi
 */
router.get('/:id', getFlatById);

/**
 * @swagger
 * /api/flats:
 *   post:
 *     summary: Yangi xonadon qo'shish
 *     tags: [Flat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               number:
 *                 type: string
 *               floor:
 *                 type: integer
 *               entrance:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Xonadon muvaffaqiyatli yaratildi
 */
router.post('/', validate(flatSchema), createFlat);

/**
 * @swagger
 * /api/flats/{id}:
 *   put:
 *     summary: Xonadon ma'lumotlarini yangilash
 *     tags: [Flat]
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
 *               number:
 *                 type: string
 *               floor:
 *                 type: integer
 *               entrance:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Xonadon yangilandi
 */
router.put('/:id', updateFlat);

/**
 * @swagger
 * /api/flats/{id}:
 *   delete:
 *     summary: Xonadonni o'chirish
 *     tags: [Flat]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Xonadon o'chirib yuborildi
 */
router.delete('/:id', deleteFlat);

module.exports = router;