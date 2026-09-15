const express = require('express');
const router = express.Router();
const {
  getAllTicketStatuses,
  getTicketStatusById,
  createTicketStatus,
  updateTicketStatus,
  deleteTicketStatus,
} = require('../controllers/ticket_status.controller');
const { ticketStatusSchema } = require('../validations/ticket_status.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/ticket-statuses:
 *   get:
 *     summary: Barcha chipta statuslarini olish
 *     tags: [TicketStatus]
 *     responses:
 *       200:
 *         description: Chipta statuslari ro'yxati
 */
router.get('/', getAllTicketStatuses);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   get:
 *     summary: ID bo'yicha chipta statusini olish
 *     tags: [TicketStatus]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Chipta statusi ma'lumotlari
 *       404:
 *         description: Chipta statusi topilmadi
 */
router.get('/:id', getTicketStatusById);

/**
 * @swagger
 * /api/ticket-statuses:
 *   post:
 *     summary: Yangi chipta statusini qo'shish
 *     tags: [TicketStatus]
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
 *         description: Chipta statusi muvaffaqiyatli yaratildi
 */
router.post('/', validate(ticketStatusSchema), createTicketStatus);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   put:
 *     summary: Chipta statusini yangilash
 *     tags: [TicketStatus]
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
 *         description: Chipta statusi yangilandi
 */
router.put('/:id', updateTicketStatus);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   delete:
 *     summary: Chipta statusini o'chirish
 *     tags: [TicketStatus]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Chipta statusi o'chirib yuborildi
 */
router.delete('/:id', deleteTicketStatus);

module.exports = router;