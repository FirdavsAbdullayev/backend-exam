const express = require('express');
const router = express.Router();
const {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/event.controller');
const { eventSchema } = require('../validations/event.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/events:
 *   get:
 *     summary: Barcha tadbirlarni olish
 *     tags: [Event]
 *     responses:
 *       200:
 *         description: Tadbirlar ro'yxati
 */
router.get('/', getAllEvents);

/**
 * @swagger
 * /api/events/{id}:
 *   get:
 *     summary: ID bo'yicha tadbirni olish
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tadbir ma'lumotlari
 *       404:
 *         description: Tadbir topilmadi
 */
router.get('/:id', getEventById);

/**
 * @swagger
 * /api/events:
 *   post:
 *     summary: Yangi tadbir qo'shish
 *     tags: [Event]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               start_date:
 *                 type: string
 *                 format: date
 *               start_time:
 *                 type: string
 *               finish_date:
 *                 type: string
 *                 format: date
 *               finish_time:
 *                 type: string
 *               info:
 *                 type: string
 *               event_type_id:
 *                 type: integer
 *               human_category_id:
 *                 type: integer
 *               venue_id:
 *                 type: integer
 *               lang_id:
 *                 type: integer
 *               release_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Tadbir muvaffaqiyatli yaratildi
 */
router.post('/', validate(eventSchema), createEvent);

/**
 * @swagger
 * /api/events/{id}:
 *   put:
 *     summary: Tadbir ma'lumotlarini yangilash
 *     tags: [Event]
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
 *               photo:
 *                 type: string
 *               start_date:
 *                 type: string
 *                 format: date
 *               start_time:
 *                 type: string
 *               finish_date:
 *                 type: string
 *                 format: date
 *               finish_time:
 *                 type: string
 *               info:
 *                 type: string
 *               event_type_id:
 *                 type: integer
 *               human_category_id:
 *                 type: integer
 *               venue_id:
 *                 type: integer
 *               lang_id:
 *                 type: integer
 *               release_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Tadbir yangilandi
 */
router.put('/:id', updateEvent);

/**
 * @swagger
 * /api/events/{id}:
 *   delete:
 *     summary: Tadbirni o'chirish
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tadbir o'chirib yuborildi
 */
router.delete('/:id', deleteEvent);

module.exports = router;