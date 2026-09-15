const TicketStatus = require('../models/ticket_status');

const getAllTicketStatuses = async (req, res) => {
  try {
    const statuses = await TicketStatus.findAll();
    res.status(200).json(statuses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTicketStatusById = async (req, res) => {
  try {
    const status = await TicketStatus.findByPk(req.params.id);
    if (!status) return res.status(404).json({ message: 'Ticket status not found' });
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTicketStatus = async (req, res) => {
  try {
    const { name } = req.body;
    const newStatus = await TicketStatus.create({ name });
    res.status(201).json({ message: 'Ticket status created successfully', ticketStatusId: newStatus.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTicketStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const status = await TicketStatus.findByPk(id);
    if (!status) return res.status(404).json({ message: 'Ticket status not found' });

    await status.update({ name });
    res.status(200).json({ message: 'Ticket status updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTicketStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const status = await TicketStatus.findByPk(id);
    if (!status) return res.status(404).json({ message: 'Ticket status not found' });

    await status.destroy();
    res.status(200).json({ message: 'Ticket status deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTicketStatuses,
  getTicketStatusById,
  createTicketStatus,
  updateTicketStatus,
  deleteTicketStatus,
};