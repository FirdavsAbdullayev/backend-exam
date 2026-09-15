const express = require('express');
const router = express.Router();
const {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
} = require('../controllers/booking.controller');
const { bookingSchema } = require('../validations/booking.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     summary: Barcha buyurtmalarni olish
 *     tags: [Booking]
 *     responses:
 *       200:
 *         description: Buyurtmalar ro'yxati
 */
router.get('/', getAllBookings);

/**
 * @swagger
 * /api/bookings/{id}:
 *   get:
 *     summary: ID bo'yicha buyurtmani olish
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Buyurtma ma'lumotlari
 *       404:
 *         description: Buyurtma topilmadi
 */
router.get('/:id', getBookingById);

/**
 * @swagger
 * /api/bookings:
 *   post:
 *     summary: Yangi buyurtma qo'shish
 *     tags: [Booking]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: integer
 *               payment_method_id:
 *                 type: integer
 *               delivery_method_id:
 *                 type: integer
 *               discount_id:
 *                 type: integer
 *               status_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Buyurtma muvaffaqiyatli yaratildi
 */
router.post('/', validate(bookingSchema), createBooking);

/**
 * @swagger
 * /api/bookings/{id}:
 *   put:
 *     summary: Buyurtma ma'lumotlarini yangilash
 *     tags: [Booking]
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
 *               payment_method_id:
 *                 type: integer
 *               delivery_method_id:
 *                 type: integer
 *               discount_id:
 *                 type: integer
 *               status_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Buyurtma yangilandi
 */
router.put('/:id', updateBooking);

/**
 * @swagger
 * /api/bookings/{id}:
 *   delete:
 *     summary: Buyurtmani o'chirish
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Buyurtma o'chirib yuborildi
 */
router.delete('/:id', deleteBooking);

module.exports = router;