const express = require('express');
const router = express.Router();
const {
  getAllRegions,
  getRegionById,
  createRegion,
  updateRegion,
  deleteRegion,
} = require('../controllers/region.controller');
const { regionSchema } = require('../validations/region.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/regions:
 *   get:
 *     summary: Barcha hududlarni olish
 *     tags: [Region]
 *     responses:
 *       200:
 *         description: Hududlar ro'yxati
 */
router.get('/', getAllRegions);

/**
 * @swagger
 * /api/regions/{id}:
 *   get:
 *     summary: ID bo'yicha hududni olish
 *     tags: [Region]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Hudud ma'lumotlari
 *       404:
 *         description: Hudud topilmadi
 */
router.get('/:id', getRegionById);

/**
 * @swagger
 * /api/regions:
 *   post:
 *     summary: Yangi hudud qo'shish
 *     tags: [Region]
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
 *         description: Hudud muvaffaqiyatli yaratildi
 */
router.post('/', validate(regionSchema), createRegion);

/**
 * @swagger
 * /api/regions/{id}:
 *   put:
 *     summary: Hudud ma'lumotlarini yangilash
 *     tags: [Region]
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
 *         description: Hudud yangilandi
 */
router.put('/:id', updateRegion);

/**
 * @swagger
 * /api/regions/{id}:
 *   delete:
 *     summary: Hududni o'chirish
 *     tags: [Region]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Hudud o'chirib yuborildi
 */
router.delete('/:id', deleteRegion);

module.exports = router;