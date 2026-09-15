const express = require('express');
const router = express.Router();
const {
  getAllGenders,
  getGenderById,
  createGender,
  updateGender,
  deleteGender,
} = require('../controllers/gender.controller');
const { genderSchema } = require('../validations/gender.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/genders:
 *   get:
 *     summary: Barcha jinslarni olish
 *     tags: [Gender]
 *     responses:
 *       200:
 *         description: Jinslar ro'yxati
 */
router.get('/', getAllGenders);

/**
 * @swagger
 * /api/genders/{id}:
 *   get:
 *     summary: ID bo'yicha jinsni olish
 *     tags: [Gender]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Jins ma'lumotlari
 *       404:
 *         description: Jins topilmadi
 */
router.get('/:id', getGenderById);

/**
 * @swagger
 * /api/genders:
 *   post:
 *     summary: Yangi jins qo'shish
 *     tags: [Gender]
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
 *         description: Jins muvaffaqiyatli yaratildi
 */
router.post('/', validate(genderSchema), createGender);

/**
 * @swagger
 * /api/genders/{id}:
 *   put:
 *     summary: Jins ma'lumotlarini yangilash
 *     tags: [Gender]
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
 *         description: Jins yangilandi
 */
router.put('/:id', updateGender);

/**
 * @swagger
 * /api/genders/{id}:
 *   delete:
 *     summary: Jinsni o'chirish
 *     tags: [Gender]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Jins o'chirib yuborildi
 */
router.delete('/:id', deleteGender);

module.exports = router;