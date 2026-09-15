const express = require('express');
const router = express.Router();
const {
  getAllLangs,
  getLangById,
  createLang,
  updateLang,
  deleteLang,
} = require('../controllers/lang.controller');
const { langSchema } = require('../validations/lang.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/langs:
 *   get:
 *     summary: Barcha tillarni olish
 *     tags: [Lang]
 *     responses:
 *       200:
 *         description: Tillar ro'yxati
 */
router.get('/', getAllLangs);

/**
 * @swagger
 * /api/langs/{id}:
 *   get:
 *     summary: ID bo'yicha tilni olish
 *     tags: [Lang]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Til ma'lumotlari
 *       404:
 *         description: Til topilmadi
 */
router.get('/:id', getLangById);

/**
 * @swagger
 * /api/langs:
 *   post:
 *     summary: Yangi til qo'shish
 *     tags: [Lang]
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
 *         description: Til muvaffaqiyatli yaratildi
 */
router.post('/', validate(langSchema), createLang);

/**
 * @swagger
 * /api/langs/{id}:
 *   put:
 *     summary: Til ma'lumotlarini yangilash
 *     tags: [Lang]
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
 *         description: Til yangilandi
 */
router.put('/:id', updateLang);

/**
 * @swagger
 * /api/langs/{id}:
 *   delete:
 *     summary: Tilni o'chirish
 *     tags: [Lang]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Til o'chirib yuborildi
 */
router.delete('/:id', deleteLang);

module.exports = router;