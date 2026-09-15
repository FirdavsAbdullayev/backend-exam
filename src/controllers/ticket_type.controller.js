const TicketType = require('../models/ticket_type');

const getAllTicketTypes = async (req, res) => {
  try {
    const types = await TicketType.findAll();
    res.status(200).json(types);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTicketTypeById = async (req, res) => {
  try {
    const type = await TicketType.findByPk(req.params.id);
    if (!type) return res.status(404).json({ message: 'Ticket type not found' });
    res.status(200).json(type);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTicketType = async (req, res) => {
  try {
    const { name } = req.body;
    const newType = await TicketType.create({ name });
    res.status(201).json({ message: 'Ticket type created successfully', ticketTypeId: newType.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTicketType = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const type = await TicketType.findByPk(id);
    if (!type) return res.status(404).json({ message: 'Ticket type not found' });

    await type.update({ name });
    res.status(200).json({ message: 'Ticket type updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTicketType = async (req, res) => {
  try {
    const { id } = req.params;
    const type = await TicketType.findByPk(id);
    if (!type) return res.status(404).json({ message: 'Ticket type not found' });

    await type.destroy();
    res.status(200).json({ message: 'Ticket type deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTicketTypes,
  getTicketTypeById,
  createTicketType,
  updateTicketType,
  deleteTicketType,
};