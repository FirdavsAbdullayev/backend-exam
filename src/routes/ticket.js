const express = require('express');
const router = express.Router();
const {
  getAllTickets,
  getTicketById,
  createTicket,
  updateTicket,
  deleteTicket,
} = require('../controllers/ticket.controller');
const { ticketSchema } = require('../validations/ticket.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/tickets:
 *   get:
 *     summary: Barcha chiptalarni olish
 *     tags: [Ticket]
 *     responses:
 *       200:
 *         description: Chiptalar ro'yxati
 */
router.get('/', getAllTickets);

/**
 * @swagger
 * /api/tickets/{id}:
 *   get:
 *     summary: ID bo'yicha chiptani olish
 *     tags: [Ticket]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Chipta ma'lumotlari
 *       404:
 *         description: Chipta topilmadi
 */
router.get('/:id', getTicketById);

/**
 * @swagger
 * /api/tickets:
 *   post:
 *     summary: Yangi chipta qo'shish
 *     tags: [Ticket]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: integer
 *               seat_id:
 *                 type: integer
 *               price:
 *                 type: number
 *               vat_percent:
 *                 type: number
 *               status_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Chipta muvaffaqiyatli yaratildi
 */
router.post('/', validate(ticketSchema), createTicket);

/**
 * @swagger
 * /api/tickets/{id}:
 *   put:
 *     summary: Chipta ma'lumotlarini yangilash
 *     tags: [Ticket]
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
 *               event_id:
 *                 type: integer
 *               seat_id:
 *                 type: integer
 *               price:
 *                 type: number
 *               vat_percent:
 *                 type: number
 *               status_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Chipta yangilandi
 */
router.put('/:id', updateTicket);

/**
 * @swagger
 * /api/tickets/{id}:
 *   delete:
 *     summary: Chiptani o'chirish
 *     tags: [Ticket]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Chipta o'chirib yuborildi
 */
router.delete('/:id', deleteTicket);

module.exports = router;