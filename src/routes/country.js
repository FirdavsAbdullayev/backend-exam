const express = require('express');
const router = express.Router();
const {
  getAllCountries,
  getCountryById,
  createCountry,
  updateCountry,
  deleteCountry,
} = require('../controllers/country.controller');
const { countrySchema } = require('../validations/country.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/countries:
 *   get:
 *     summary: Barcha davlatlarni olish
 *     tags: [Country]
 *     responses:
 *       200:
 *         description: Davlatlar ro'yxati
 */
router.get('/', getAllCountries);

/**
 * @swagger
 * /api/countries/{id}:
 *   get:
 *     summary: ID bo'yicha davlatni olish
 *     tags: [Country]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Davlat ma'lumotlari
 *       404:
 *         description: Davlat topilmadi
 */
router.get('/:id', getCountryById);

/**
 * @swagger
 * /api/countries:
 *   post:
 *     summary: Yangi davlat qo'shish
 *     tags: [Country]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               code:
 *                 type: string
 *     responses:
 *       201:
 *         description: Davlat muvaffaqiyatli yaratildi
 */
router.post('/', validate(countrySchema), createCountry);

/**
 * @swagger
 * /api/countries/{id}:
 *   put:
 *     summary: Davlat ma'lumotlarini yangilash
 *     tags: [Country]
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
 *               code:
 *                 type: string
 *     responses:
 *       200:
 *         description: Davlat yangilandi
 */
router.put('/:id', updateCountry);

/**
 * @swagger
 * /api/countries/{id}:
 *   delete:
 *     summary: Davlatni o'chirish
 *     tags: [Country]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Davlat o'chirib yuborildi
 */
router.delete('/:id', deleteCountry);

module.exports = router;