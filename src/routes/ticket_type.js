const express = require('express');
const router = express.Router();
const {
  getAllTicketTypes,
  getTicketTypeById,
  createTicketType,
  updateTicketType,
  deleteTicketType,
} = require('../controllers/ticket_type.controller');
const { ticketTypeSchema } = require('../validations/ticket_type.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/ticket-types:
 *   get:
 *     summary: Barcha chipta turlarini olish
 *     tags: [TicketType]
 *     responses:
 *       200:
 *         description: Chipta turlari ro'yxati
 */
router.get('/', getAllTicketTypes);

/**
 * @swagger
 * /api/ticket-types/{id}:
 *   get:
 *     summary: ID bo'yicha chipta turini olish
 *     tags: [TicketType]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Chipta turi ma'lumotlari
 *       404:
 *         description: Chipta turi topilmadi
 */
router.get('/:id', getTicketTypeById);

/**
 * @swagger
 * /api/ticket-types:
 *   post:
 *     summary: Yangi chipta turini qo'shish
 *     tags: [TicketType]
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
 *         description: Chipta turi muvaffaqiyatli yaratildi
 */
router.post('/', validate(ticketTypeSchema), createTicketType);

/**
 * @swagger
 * /api/ticket-types/{id}:
 *   put:
 *     summary: Chipta turini yangilash
 *     tags: [TicketType]
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
 *         description: Chipta turi yangilandi
 */
router.put('/:id', updateTicketType);

/**
 * @swagger
 * /api/ticket-types/{id}:
 *   delete:
 *     summary: Chipta turini o'chirish
 *     tags: [TicketType]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Chipta turi o'chirib yuborildi
 */
router.delete('/:id', deleteTicketType);

module.exports = router;