const express = require('express');
const router = express.Router();
const {
  getAllCustomerAddresses,
  getCustomerAddressById,
  createCustomerAddress,
  updateCustomerAddress,
  deleteCustomerAddress,
} = require('../controllers/customer_address.controller');
const { customerAddressSchema } = require('../validations/customer_address.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/customer-addresses:
 *   get:
 *     summary: Barcha mijoz manzillarini olish
 *     tags: [CustomerAddress]
 *     responses:
 *       200:
 *         description: Mijoz manzillari ro'yxati
 */
router.get('/', getAllCustomerAddresses);

/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   get:
 *     summary: ID bo'yicha mijoz manzilini olish
 *     tags: [CustomerAddress]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mijoz manzili ma'lumotlari
 *       404:
 *         description: Mijoz manzili topilmadi
 */
router.get('/:id', getCustomerAddressById);

/**
 * @swagger
 * /api/customer-addresses:
 *   post:
 *     summary: Yangi mijoz manzilini qo'shish
 *     tags: [CustomerAddress]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer
 *               name:
 *                 type: string
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat:
 *                 type: string
 *               location:
 *                 type: string
 *               post_index:
 *                 type: string
 *               district_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Mijoz manzili muvaffaqiyatli yaratildi
 */
router.post('/', validate(customerAddressSchema), createCustomerAddress);

/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   put:
 *     summary: Mijoz manzilini yangilash
 *     tags: [CustomerAddress]
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
 *               customer_id:
 *                 type: integer
 *               name:
 *                 type: string
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat:
 *                 type: string
 *               location:
 *                 type: string
 *               post_index:
 *                 type: string
 *               district_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Mijoz manzili yangilandi
 */
router.put('/:id', updateCustomerAddress);

/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   delete:
 *     summary: Mijoz manzilini o'chirish
 *     tags: [CustomerAddress]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mijoz manzili o'chirib yuborildi
 */
router.delete('/:id', deleteCustomerAddress);

module.exports = router;