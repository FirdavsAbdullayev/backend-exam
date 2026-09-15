const express = require('express');
const router = express.Router();
const {
  getAllHumanCategories,
  getHumanCategoryById,
  createHumanCategory,
  updateHumanCategory,
  deleteHumanCategory,
} = require('../controllers/human_category.controller');
const { humanCategorySchema } = require('../validations/human_category.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/human-categories:
 *   get:
 *     summary: Barcha shaxsiy kategoriyalarni olish
 *     tags: [HumanCategory]
 *     responses:
 *       200:
 *         description: Shaxsiy kategoriyalar ro'yxati
 */
router.get('/', getAllHumanCategories);

/**
 * @swagger
 * /api/human-categories/{id}:
 *   get:
 *     summary: ID bo'yicha shaxsiy kategoriyani olish
 *     tags: [HumanCategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Shaxsiy kategoriya ma'lumotlari
 *       404:
 *         description: Shaxsiy kategoriya topilmadi
 */
router.get('/:id', getHumanCategoryById);

/**
 * @swagger
 * /api/human-categories:
 *   post:
 *     summary: Yangi shaxsiy kategoriya qo'shish
 *     tags: [HumanCategory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: integer
 *               finish_age:
 *                 type: integer
 *               gender:
 *                 type: string
 *     responses:
 *       201:
 *         description: Shaxsiy kategoriya muvaffaqiyatli yaratildi
 */
router.post('/', validate(humanCategorySchema), createHumanCategory);

/**
 * @swagger
 * /api/human-categories/{id}:
 *   put:
 *     summary: Shaxsiy kategoriyani yangilash
 *     tags: [HumanCategory]
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
 *               start_age:
 *                 type: integer
 *               finish_age:
 *                 type: integer
 *               gender:
 *                 type: string
 *     responses:
 *       200:
 *         description: Shaxsiy kategoriya yangilandi
 */
router.put('/:id', updateHumanCategory);

/**
 * @swagger
 * /api/human-categories/{id}:
 *   delete:
 *     summary: Shaxsiy kategoriyani o'chirish
 *     tags: [HumanCategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Shaxsiy kategoriya o'chirib yuborildi
 */
router.delete('/:id', deleteHumanCategory);

module.exports = router;