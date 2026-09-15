const express = require('express');
const router = express.Router();
const {
  getAllAdmins,
  getAdminById,
  createAdmin,
  updateAdmin,
  deleteAdmin,
} = require('../controllers/admin.controller');
const { adminSchema } = require('../validations/admin.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/admins:
 *   get:
 *     summary: Barcha adminlarni olish
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: Adminlar ro'yxati
 */
router.get('/', getAllAdmins);

/**
 * @swagger
 * /api/admins/{id}:
 *   get:
 *     summary: ID bo'yicha adminni olish
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Admin ma'lumotlari
 *       404:
 *         description: Admin topilmadi
 */
router.get('/:id', getAdminById);

/**
 * @swagger
 * /api/admins:
 *   post:
 *     summary: Yangi admin qo'shish
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               is_creator:
 *                 type: boolean
 *               is_active:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Admin muvaffaqiyatli yaratildi
 */
router.post('/', validate(adminSchema), createAdmin);

/**
 * @swagger
 * /api/admins/{id}:
 *   put:
 *     summary: Admin ma'lumotlarini yangilash
 *     tags: [Admin]
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
 *               email:
 *                 type: string
 *               is_creator:
 *                 type: boolean
 *               is_active:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Admin yangilandi
 */
router.put('/:id', updateAdmin);

/**
 * @swagger
 * /api/admins/{id}:
 *   delete:
 *     summary: Adminni o'chirish
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Admin o'chirib yuborildi
 */
router.delete('/:id', deleteAdmin);

module.exports = router;