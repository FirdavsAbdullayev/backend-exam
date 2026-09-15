const Flat = require('../models/flat');

const getAllFlats = async (req, res) => {
  try {
    const flats = await Flat.findAll();
    res.status(200).json(flats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFlatById = async (req, res) => {
  try {
    const flat = await Flat.findByPk(req.params.id);
    if (!flat) return res.status(404).json({ message: 'Flat not found' });
    res.status(200).json(flat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createFlat = async (req, res) => {
  try {
    const { number, floor, entrance } = req.body;
    const newFlat = await Flat.create({ number, floor, entrance });
    res.status(201).json({ message: 'Flat created successfully', flatId: newFlat.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateFlat = async (req, res) => {
  try {
    const { id } = req.params;
    const { number, floor, entrance } = req.body;

    const flat = await Flat.findByPk(id);
    if (!flat) return res.status(404).json({ message: 'Flat not found' });

    await flat.update({ number, floor, entrance });
    res.status(200).json({ message: 'Flat updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteFlat = async (req, res) => {
  try {
    const { id } = req.params;
    const flat = await Flat.findByPk(id);
    if (!flat) return res.status(404).json({ message: 'Flat not found' });

    await flat.destroy();
    res.status(200).json({ message: 'Flat deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllFlats,
  getFlatById,
  createFlat,
  updateFlat,
  deleteFlat,
};  