const express = require('express');
const router = express.Router();
const {
  getAllVenues,
  getVenueById,
  createVenue,
  updateVenue,
  deleteVenue,
} = require('../controllers/venue.controller');
const { venueSchema } = require('../validations/venue.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/venues:
 *   get:
 *     summary: Barcha maydonlarni (venues) olish
 *     tags: [Venue]
 *     responses:
 *       200:
 *         description: Maydonlar ro'yxati
 */
router.get('/', getAllVenues);

/**
 * @swagger
 * /api/venues/{id}:
 *   get:
 *     summary: ID bo'yicha maydonni olish
 *     tags: [Venue]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Maydon ma'lumotlari
 *       404:
 *         description: Maydon topilmadi
 */
router.get('/:id', getVenueById);

/**
 * @swagger
 * /api/venues:
 *   post:
 *     summary: Yangi maydon qo'shish
 *     tags: [Venue]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               venue_type_id:
 *                 type: integer
 *               region_id:
 *                 type: integer
 *               district_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Maydon muvaffaqiyatli yaratildi
 */
router.post('/', validate(venueSchema), createVenue);

/**
 * @swagger
 * /api/venues/{id}:
 *   put:
 *     summary: Maydon ma'lumotlarini yangilash
 *     tags: [Venue]
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
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               venue_type_id:
 *                 type: integer
 *               region_id:
 *                 type: integer
 *               district_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Maydon yangilandi
 */
router.put('/:id', updateVenue);

/**
 * @swagger
 * /api/venues/{id}:
 *   delete:
 *     summary: Maydonni o'chirish
 *     tags: [Venue]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Maydon o'chirib yuborildi
 */
router.delete('/:id', deleteVenue);

module.exports = router;