const Event = require('../models/event');

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEventById = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createEvent = async (req, res) => {
  try {
    const {
      name,
      photo,
      start_date,
      start_time,
      finish_date,
      finish_time,
      info,
      event_type_id,
      human_category_id,
      venue_id,
      lang_id,
      release_date,
    } = req.body;

    const newEvent = await Event.create({
      name,
      photo,
      start_date,
      start_time,
      finish_date,
      finish_time,
      info,
      event_type_id,
      human_category_id,
      venue_id,
      lang_id,
      release_date,
    });

    res.status(201).json({ message: 'Event created successfully', eventId: newEvent.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      photo,
      start_date,
      start_time,
      finish_date,
      finish_time,
      info,
      event_type_id,
      human_category_id,
      venue_id,
      lang_id,
      release_date,
    } = req.body;

    const event = await Event.findByPk(id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    await event.update({
      name,
      photo,
      start_date,
      start_time,
      finish_date,
      finish_time,
      info,
      event_type_id,
      human_category_id,
      venue_id,
      lang_id,
      release_date,
    });

    res.status(200).json({ message: 'Event updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByPk(id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    await event.destroy();
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
};  