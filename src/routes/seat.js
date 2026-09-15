const express = require('express');
const router = express.Router();
const {
  getAllSeats,
  getSeatById,
  createSeat,
  updateSeat,
  deleteSeat,
} = require('../controllers/seat.controller');
const { seatSchema } = require('../validations/seat.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/seats:
 *   get:
 *     summary: Barcha o'rindiqlarni olish
 *     tags: [Seat]
 *     responses:
 *       200:
 *         description: O'rindiqlar ro'yxati
 */
router.get('/', getAllSeats);

/**
 * @swagger
 * /api/seats/{id}:
 *   get:
 *     summary: ID bo'yicha o'rindiqni olish
 *     tags: [Seat]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: O'rindiq ma'lumotlari
 *       404:
 *         description: O'rindiq topilmadi
 */
router.get('/:id', getSeatById);

/**
 * @swagger
 * /api/seats:
 *   post:
 *     summary: Yangi o'rindiq qo'shish
 *     tags: [Seat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               seat_number:
 *                 type: string
 *               row_number:
 *                 type: string
 *               sector_id:
 *                 type: integer
 *               venue_id:
 *                 type: integer
 *               seat_type_id:
 *                 type: integer
 *               status_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: O'rindiq muvaffaqiyatli yaratildi
 */
router.post('/', validate(seatSchema), createSeat);

/**
 * @swagger
 * /api/seats/{id}:
 *   put:
 *     summary: O'rindiq ma'lumotlarini yangilash
 *     tags: [Seat]
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
 *               seat_number:
 *                 type: string
 *               row_number:
 *                 type: string
 *               sector_id:
 *                 type: integer
 *               venue_id:
 *                 type: integer
 *               seat_type_id:
 *                 type: integer
 *               status_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: O'rindiq yangilandi
 */
router.put('/:id', updateSeat);

/**
 * @swagger
 * /api/seats/{id}:
 *   delete:
 *     summary: O'rindiqni o'chirish
 *     tags: [Seat]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: O'rindiq o'chirib yuborildi
 */
router.delete('/:id', deleteSeat);

module.exports = router;