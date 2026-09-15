const express = require('express');
const router = express.Router();
const {
  getAllEventTypes,
  getEventTypeById,
  createEventType,
  updateEventType,
  deleteEventType,
} = require('../controllers/event_type.controller');
const { eventTypeSchema } = require('../validations/event_type.validation');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

/**
 * @swagger
 * /api/event-types:
 *   get:
 *     summary: Barcha tadbir turlarini olish
 *     tags: [EventType]
 *     responses:
 *       200:
 *         description: Tadbir turlari ro'yxati
 */
router.get('/', getAllEventTypes);

/**
 * @swagger
 * /api/event-types/{id}:
 *   get:
 *     summary: ID bo'yicha tadbir turini olish
 *     tags: [EventType]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tadbir turi ma'lumotlari
 *       404:
 *         description: Tadbir turi topilmadi
 */
router.get('/:id', getEventTypeById);

/**
 * @swagger
 * /api/event-types:
 *   post:
 *     summary: Yangi tadbir turini qo'shish
 *     tags: [EventType]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               parent_event_type_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Tadbir turi muvaffaqiyatli yaratildi
 */
router.post('/', validate(eventTypeSchema), createEventType);

/**
 * @swagger
 * /api/event-types/{id}:
 *   put:
 *     summary: Tadbir turini yangilash
 *     tags: [EventType]
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
 *               parent_event_type_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Tadbir turi yangilandi
 */
router.put('/:id', updateEventType);

/**
 * @swagger
 * /api/event-types/{id}:
 *   delete:
 *     summary: Tadbir turini o'chirish
 *     tags: [EventType]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tadbir turi o'chirib yuborildi
 */
router.delete('/:id', deleteEventType);

module.exports = router;