const EventType = require('../models/event_type');

const getAllEventTypes = async (req, res) => {
  try {
    const eventTypes = await EventType.findAll();
    res.status(200).json(eventTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEventTypeById = async (req, res) => {
  try {
    const eventType = await EventType.findByPk(req.params.id);
    if (!eventType) return res.status(404).json({ message: 'Event type not found' });
    res.status(200).json(eventType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createEventType = async (req, res) => {
  try {
    const { name, parent_event_type_id } = req.body;
    const newEventType = await EventType.create({ name, parent_event_type_id });
    res.status(201).json({ message: 'Event type created successfully', eventTypeId: newEventType.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEventType = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, parent_event_type_id } = req.body;

    const eventType = await EventType.findByPk(id);
    if (!eventType) return res.status(404).json({ message: 'Event type not found' });

    await eventType.update({ name, parent_event_type_id });
    res.status(200).json({ message: 'Event type updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEventType = async (req, res) => {
  try {
    const { id } = req.params;
    const eventType = await EventType.findByPk(id);
    if (!eventType) return res.status(404).json({ message: 'Event type not found' });

    await eventType.destroy();
    res.status(200).json({ message: 'Event type deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllEventTypes,
  getEventTypeById,
  createEventType,
  updateEventType,
  deleteEventType,
};