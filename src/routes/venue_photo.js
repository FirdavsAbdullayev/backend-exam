const express = require('express');
const router = express.Router();
const {
  getAllVenuePhotos,
  getVenuePhotoById,
  createVenuePhoto,
  updateVenuePhoto,
  deleteVenuePhoto,
} = require('../controllers/venue_photo.controller');
const { venuePhotoSchema } = require('../validations/venue_photo.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/venue-photos:
 *   get:
 *     summary: Barcha maydon rasmlarini olish
 *     tags: [VenuePhoto]
 *     responses:
 *       200:
 *         description: Maydon rasmlari ro'yxati
 */
router.get('/', getAllVenuePhotos);

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   get:
 *     summary: ID bo'yicha maydon rasmini olish
 *     tags: [VenuePhoto]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Maydon rasmi ma'lumotlari
 *       404:
 *         description: Maydon rasmi topilmadi
 */
router.get('/:id', getVenuePhotoById);

/**
 * @swagger
 * /api/venue-photos:
 *   post:
 *     summary: Yangi maydon rasmini qo'shish
 *     tags: [VenuePhoto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: integer
 *               url:
 *                 type: string
 *     responses:
 *       201:
 *         description: Maydon rasmi muvaffaqiyatli yaratildi
 */
router.post('/', validate(venuePhotoSchema), createVenuePhoto);

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   put:
 *     summary: Maydon rasmini yangilash
 *     tags: [VenuePhoto]
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
 *               venue_id:
 *                 type: integer
 *               url:
 *                 type: string
 *     responses:
 *       200:
 *         description: Maydon rasmi yangilandi
 */
router.put('/:id', updateVenuePhoto);

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   delete:
 *     summary: Maydon rasmini o'chirish
 *     tags: [VenuePhoto]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Maydon rasmi o'chirib yuborildi
 */
router.delete('/:id', deleteVenuePhoto);

module.exports = router;