const express = require('express');
const router = express.Router();
const {
  getAllCustomerCards,
  getCustomerCardById,
  createCustomerCard,
  updateCustomerCard,
  deleteCustomerCard,
} = require('../controllers/customer_card.controller');

const { customerCardSchema } = require('../validations/customer_card.validation'); 
const validate = (schema) => (req, res, next) => {
  if (!schema || typeof schema.validate !== 'function') {
    return res.status(500).json({ error: "Validatsiya sxemasi topilmadi" });
  }
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

/**
 * @swagger
 * tags:
 *   name: CustomerCards
 *   description: Mijoz kartalarini boshqarish
 */

/**
 * @swagger
 * /customer-cards:
 *   get:
 *     summary: Barcha mijoz kartalarini olish
 *     tags: [CustomerCards]
 *     responses:
 *       200:
 *         description: Kartalar ro'yxati olindi
 *       500:
 *         description: Serverda ichki xatolik
 */
router.get('/', getAllCustomerCards);

/**
 * @swagger
 * /customer-cards/{id}:
 *   get:
 *     summary: ID bo'yicha mijoz kartasini olish
 *     tags: [CustomerCards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Karta ma'lumotlari
 *       404:
 *         description: Karta topilmadi
 */
router.get('/:id', getCustomerCardById);

/**
 * @swagger
 * /customer-cards:
 *   post:
 *     summary: Yangi mijoz kartasini qo'shish
 *     tags: [CustomerCards]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customer_id
 *               - name
 *               - phone
 *               - card_number
 *               - year
 *               - month
 *             properties:
 *               customer_id:
 *                 type: integer
 *                 example: 1
 *               name:
 *                 type: string
 *                 example: "Uzcard - Eshmatov"
 *               phone:
 *                 type: string
 *                 example: "+998901234567"
 *               card_number:
 *                 type: string
 *                 example: "8600123456789012"
 *               year:
 *                 type: string
 *                 example: "28"
 *               month:
 *                 type: string
 *                 example: "12"
 *               is_active:
 *                 type: boolean
 *                 example: true
 *               is_main:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Karta qo'shildi
 *       400:
 *         description: Validatsiya xatoligi
 */
router.post('/', validate(customerCardSchema), createCustomerCard);

/**
 * @swagger
 * /customer-cards/{id}:
 *   put:
 *     summary: Mijoz kartasini yangilash
 *     tags: [CustomerCards]
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
 *                 example: "Humo - Toshmatov"
 *               phone:
 *                 type: string
 *                 example: "+998909876543"
 *               is_active:
 *                 type: boolean
 *                 example: true
 *               is_main:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       200:
 *         description: Karta yangilandi
 *       400:
 *         description: Validatsiya xatoligi
 *       404:
 *         description: Karta topilmadi
 */
router.put('/:id', validate(customerCardSchema), updateCustomerCard);

/**
 * @swagger
 * /customer-cards/{id}:
 *   delete:
 *     summary: Mijoz kartasini o'chirish
 *     tags: [CustomerCards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Karta o'chirildi
 *       404:
 *         description: Karta topilmadi
 */
router.delete('/:id', deleteCustomerCard);

module.exports = router;