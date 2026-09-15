const express = require('express');
const router = express.Router();
const {
  getAllDiscounts,
  getDiscountById,
  createDiscount,
  updateDiscount,
  deleteDiscount,
} = require('../controllers/discount.controller');
const { discountSchema } = require('../validations/discount.validation');

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
 *   name: Discounts
 *   description: Chegirmalarni boshqarish bo'limi
 */

/**
 * @swagger
 * /discounts:
 *   get:
 *     summary: Barcha chegirmalarni olish
 *     tags: [Discounts]
 *     responses:
 *       200:
 *         description: Chegirmalar ro'yxati muvaffaqiyatli olindi
 *       500:
 *         description: Serverda ichki xatolik
 */
router.get('/', getAllDiscounts);

/**
 * @swagger
 * /discounts/{id}:
 *   get:
 *     summary: ID bo'yicha chegirmani olish
 *     tags: [Discounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Chegirma ID si
 *     responses:
 *       200:
 *         description: Chegirma ma'lumotlari topildi
 *       404:
 *         description: Chegirma topilmadi
 *       500:
 *         description: Serverda ichki xatolik
 */
router.get('/:id', getDiscountById);

/**
 * @swagger
 * /discounts:
 *   post:
 *     summary: Yangi chegirma qo'shish
 *     tags: [Discounts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - discount
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Yangi Yil Chegirmasi"
 *               discount:
 *                 type: number
 *                 example: 15
 *               description:
 *                 type: string
 *                 example: "Barcha chiptalar uchun 15% chegirma"
 *     responses:
 *       201:
 *         description: Chegirma muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatoligi
 *       500:
 *         description: Serverda ichki xatolik
 */
router.post('/', validate(discountSchema), createDiscount);

/**
 * @swagger
 * /discounts/{id}:
 *   put:
 *     summary: Chegirmani yangilash
 *     tags: [Discounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Chegirma ID si
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Navro'z Chegirmasi"
 *               discount:
 *                 type: number
 *                 example: 20
 *               description:
 *                 type: string
 *                 example: "Barcha chiptalar uchun 20% chegirma"
 *     responses:
 *       200:
 *         description: Chegirma muvaffaqiyatli yangilandi
 *       400:
 *         description: Validatsiya xatoligi
 *       404:
 *         description: Chegirma topilmadi
 *       500:
 *         description: Serverda ichki xatolik
 */
router.put('/:id', validate(discountSchema), updateDiscount);

/**
 * @swagger
 * /discounts/{id}:
 *   delete:
 *     summary: Chegirmani o'chirish
 *     tags: [Discounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Chegirma ID si
 *     responses:
 *       200:
 *         description: Chegirma muvaffaqiyatli o'chirildi
 *       404:
 *         description: Chegirma topilmadi
 *       500:
 *         description: Serverda ichki xatolik
 */
router.delete('/:id', deleteDiscount);

module.exports = router;