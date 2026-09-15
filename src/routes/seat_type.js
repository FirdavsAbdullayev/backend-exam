const express = require('express');
const router = express.Router();
const {
  getAllSeatTypes,
  getSeatTypeById,
  createSeatType,
  updateSeatType,
  deleteSeatType,
} = require('../controllers/seat_type.controller');
const { seatTypeSchema } = require('../validations/seat_type.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/seat-types:
 *   get:
 *     summary: Barcha o'rindiq turlarini olish
 *     tags: [SeatType]
 *     responses:
 *       200:
 *         description: O'rindiq turlari ro'yxati
 */
router.get('/', getAllSeatTypes);

/**
 * @swagger
 * /api/seat-types/{id}:
 *   get:
 *     summary: ID bo'yicha o'rindiq turini olish
 *     tags: [SeatType]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: O'rindiq turi ma'lumotlari
 *       404:
 *         description: O'rindiq turi topilmadi
 */
router.get('/:id', getSeatTypeById);

/**
 * @swagger
 * /api/seat-types:
 *   post:
 *     summary: Yangi o'rindiq turini qo'shish
 *     tags: [SeatType]
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
 *         description: O'rindiq turi muvaffaqiyatli yaratildi
 */
router.post('/', validate(seatTypeSchema), createSeatType);

/**
 * @swagger
 * /api/seat-types/{id}:
 *   put:
 *     summary: O'rindiq turini yangilash
 *     tags: [SeatType]
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
 *         description: O'rindiq turi yangilandi
 */
router.put('/:id', updateSeatType);

/**
 * @swagger
 * /api/seat-types/{id}:
 *   delete:
 *     summary: O'rindiq turini o'chirish
 *     tags: [SeatType]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: O'rindiq turi o'chirib yuborildi
 */
router.delete('/:id', deleteSeatType);

module.exports = router;