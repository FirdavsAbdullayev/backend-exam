const express = require('express');
const router = express.Router();
const {
  getAllVenueTypes,
  getVenueTypeById,
  createVenueType,
  updateVenueType,
  deleteVenueType,
} = require('../controllers/venue_types.controller');
const { venueTypeSchema } = require('../validations/venue_types.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/venue-types:
 *   get:
 *     summary: Barcha maydon turlarini olish
 *     tags: [VenueType]
 *     responses:
 *       200:
 *         description: Maydon turlari ro'yxati
 */
router.get('/', getAllVenueTypes);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   get:
 *     summary: ID bo'yicha maydon turini olish
 *     tags: [VenueType]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Maydon turi ma'lumotlari
 *       404:
 *         description: Maydon turi topilmadi
 */
router.get('/:id', getVenueTypeById);

/**
 * @swagger
 * /api/venue-types:
 *   post:
 *     summary: Yangi maydon turini qo'shish
 *     tags: [VenueType]
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
 *         description: Maydon turi muvaffaqiyatli yaratildi
 */
router.post('/', validate(venueTypeSchema), createVenueType);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   put:
 *     summary: Maydon turini yangilash
 *     tags: [VenueType]
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
 *         description: Maydon turi yangilandi
 */
router.put('/:id', updateVenueType);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   delete:
 *     summary: Maydon turini o'chirish
 *     tags: [VenueType]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Maydon turi o'chirib yuborildi
 */
router.delete('/:id', deleteVenueType);

module.exports = router;