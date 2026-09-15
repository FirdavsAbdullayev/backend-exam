const Seat = require('../models/seat');

const getAllSeats = async (req, res) => {
  try {
    const seats = await Seat.findAll();
    res.status(200).json(seats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSeatById = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id);
    if (!seat) return res.status(404).json({ message: 'Seat not found' });
    res.status(200).json(seat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createSeat = async (req, res) => {
  try {
    const { seat_number, row_number, sector_id, venue_id, seat_type_id, status_id } = req.body;
    const newSeat = await Seat.create({ seat_number, row_number, sector_id, venue_id, seat_type_id, status_id });
    res.status(201).json({ message: 'Seat created successfully', seatId: newSeat.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateSeat = async (req, res) => {
  try {
    const { id } = req.params;
    const { seat_number, row_number, sector_id, venue_id, seat_type_id, status_id } = req.body;

    const seat = await Seat.findByPk(id);
    if (!seat) return res.status(404).json({ message: 'Seat not found' });

    await seat.update({ seat_number, row_number, sector_id, venue_id, seat_type_id, status_id });
    res.status(200).json({ message: 'Seat updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSeat = async (req, res) => {
  try {
    const { id } = req.params;
    const seat = await Seat.findByPk(id);
    if (!seat) return res.status(404).json({ message: 'Seat not found' });

    await seat.destroy();
    res.status(200).json({ message: 'Seat deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllSeats,
  getSeatById,
  createSeat,
  updateSeat,
  deleteSeat,
};