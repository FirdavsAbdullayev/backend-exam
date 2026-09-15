const express = require('express');
const router = express.Router();
const {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require('../controllers/customer.controller');
const { customerSchema } = require('../validations/customer.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/customers:
 *   get:
 *     summary: Barcha mijozlarni olish
 *     tags: [Customer]
 *     responses:
 *       200:
 *         description: Mijozlar ro'yxati
 */
router.get('/', getAllCustomers);

/**
 * @swagger
 * /api/customers/{id}:
 *   get:
 *     summary: ID bo'yicha mijozni olish
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mijoz ma'lumotlari
 *       404:
 *         description: Mijoz topilmadi
 */
router.get('/:id', getCustomerById);

/**
 * @swagger
 * /api/customers:
 *   post:
 *     summary: Yangi mijoz qo'shish
 *     tags: [Customer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               phone:
 *                 type: string
 *               birth_date:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: string
 *               lang_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Mijoz muvaffaqiyatli yaratildi
 */
router.post('/', validate(customerSchema), createCustomer);

/**
 * @swagger
 * /api/customers/{id}:
 *   put:
 *     summary: Mijoz ma'lumotlarini yangilash
 *     tags: [Customer]
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
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               birth_date:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: string
 *               lang_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Mijoz yangilandi
 */
router.put('/:id', updateCustomer);

/**
 * @swagger
 * /api/customers/{id}:
 *   delete:
 *     summary: Mijozni o'chirish
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mijoz o'chirib yuborildi
 */
router.delete('/:id', deleteCustomer);

module.exports = router;