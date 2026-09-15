const Sector = require('../models/sector');

const getAllSectors = async (req, res) => {
  try {
    const sectors = await Sector.findAll();
    res.status(200).json(sectors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSectorById = async (req, res) => {
  try {
    const sector = await Sector.findByPk(req.params.id);
    if (!sector) return res.status(404).json({ message: 'Sector not found' });
    res.status(200).json(sector);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createSector = async (req, res) => {
  try {
    const { name, venue_id } = req.body;
    const newSector = await Sector.create({ name, venue_id });
    res.status(201).json({ message: 'Sector created successfully', sectorId: newSector.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateSector = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, venue_id } = req.body;

    const sector = await Sector.findByPk(id);
    if (!sector) return res.status(404).json({ message: 'Sector not found' });

    await sector.update({ name, venue_id });
    res.status(200).json({ message: 'Sector updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSector = async (req, res) => {
  try {
    const { id } = req.params;
    const sector = await Sector.findByPk(id);
    if (!sector) return res.status(404).json({ message: 'Sector not found' });

    await sector.destroy();
    res.status(200).json({ message: 'Sector deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllSectors,
  getSectorById,
  createSector,
  updateSector,
  deleteSector,
};