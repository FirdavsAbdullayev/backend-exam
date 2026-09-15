const express = require('express');
const router = express.Router();
const {
  getAllSectors,
  getSectorById,
  createSector,
  updateSector,
  deleteSector,
} = require('../controllers/sector.controller');
const { sectorSchema } = require('../validations/sector.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/sectors:
 *   get:
 *     summary: Barcha sektorlarni olish
 *     tags: [Sector]
 *     responses:
 *       200:
 *         description: Sektorlar ro'yxati
 */
router.get('/', getAllSectors);

/**
 * @swagger
 * /api/sectors/{id}:
 *   get:
 *     summary: ID bo'yicha sektorni olish
 *     tags: [Sector]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sektor ma'lumotlari
 *       404:
 *         description: Sektor topilmadi
 */
router.get('/:id', getSectorById);

/**
 * @swagger
 * /api/sectors:
 *   post:
 *     summary: Yangi sektor qo'shish
 *     tags: [Sector]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               venue_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Sektor muvaffaqiyatli yaratildi
 */
router.post('/', validate(sectorSchema), createSector);

/**
 * @swagger
 * /api/sectors/{id}:
 *   put:
 *     summary: Sektor ma'lumotlarini yangilash
 *     tags: [Sector]
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
 *               venue_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Sektor yangilandi
 */
router.put('/:id', updateSector);

/**
 * @swagger
 * /api/sectors/{id}:
 *   delete:
 *     summary: Sektorni o'chirish
 *     tags: [Sector]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sektor o'chirib yuborildi
 */
router.delete('/:id', deleteSector);

module.exports = router;