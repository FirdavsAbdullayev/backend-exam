const SeatType = require('../models/seat_type');

const getAllSeatTypes = async (req, res) => {
  try {
    const seatTypes = await SeatType.findAll();
    res.status(200).json(seatTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSeatTypeById = async (req, res) => {
  try {
    const seatType = await SeatType.findByPk(req.params.id);
    if (!seatType) return res.status(404).json({ message: 'Seat type not found' });
    res.status(200).json(seatType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createSeatType = async (req, res) => {
  try {
    const { name } = req.body;
    const newSeatType = await SeatType.create({ name });
    res.status(201).json({ message: 'Seat type created successfully', seatTypeId: newSeatType.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateSeatType = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const seatType = await SeatType.findByPk(id);
    if (!seatType) return res.status(404).json({ message: 'Seat type not found' });

    await seatType.update({ name });
    res.status(200).json({ message: 'Seat type updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSeatType = async (req, res) => {
  try {
    const { id } = req.params;
    const seatType = await SeatType.findByPk(id);
    if (!seatType) return res.status(404).json({ message: 'Seat type not found' });

    await seatType.destroy();
    res.status(200).json({ message: 'Seat type deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllSeatTypes,
  getSeatTypeById,
  createSeatType,
  updateSeatType,
  deleteSeatType,
};