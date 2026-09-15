const Ticket = require('../models/ticket');

const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTicket = async (req, res) => {
  try {
    const { event_id, seat_id, price, vat_percent, status_id } = req.body;
    const newTicket = await Ticket.create({ event_id, seat_id, price, vat_percent, status_id });
    res.status(201).json({ message: 'Ticket created successfully', ticketId: newTicket.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const { event_id, seat_id, price, vat_percent, status_id } = req.body;

    const ticket = await Ticket.findByPk(id);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });

    await ticket.update({ event_id, seat_id, price, vat_percent, status_id });
    res.status(200).json({ message: 'Ticket updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await Ticket.findByPk(id);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });

    await ticket.destroy();
    res.status(200).json({ message: 'Ticket deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTickets,
  getTicketById,
  createTicket,
  updateTicket,
  deleteTicket,
};