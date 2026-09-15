const express = require('express');
const router = express.Router();
const {
  getAllDistricts,
  getDistrictById,
  createDistrict,
  updateDistrict,
  deleteDistrict,
} = require('../controllers/district.controller');
const { districtSchema } = require('../validations/district.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/districts:
 *   get:
 *     summary: Barcha tumanlarni olish
 *     tags: [District]
 *     responses:
 *       200:
 *         description: Tumanlar ro'yxati
 */
router.get('/', getAllDistricts);

/**
 * @swagger
 * /api/districts/{id}:
 *   get:
 *     summary: ID bo'yicha tumanni olish
 *     tags: [District]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tuman ma'lumotlari
 *       404:
 *         description: Tuman topilmadi
 */
router.get('/:id', getDistrictById);

/**
 * @swagger
 * /api/districts:
 *   post:
 *     summary: Yangi tuman qo'shish
 *     tags: [District]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Tuman muvaffaqiyatli yaratildi
 */
router.post('/', validate(districtSchema), createDistrict);

/**
 * @swagger
 * /api/districts/{id}:
 *   put:
 *     summary: Tuman ma'lumotlarini yangilash
 *     tags: [District]
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
 *               region_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Tuman yangilandi
 */
router.put('/:id', updateDistrict);

/**
 * @swagger
 * /api/districts/{id}:
 *   delete:
 *     summary: Tumanni o'chirish
 *     tags: [District]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tuman o'chirib yuborildi
 */
router.delete('/:id', deleteDistrict);

module.exports = router;