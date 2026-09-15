const VenueType = require('../models/venue_types');

const createVenueType = async (req, res) => {
  try {
    const venueType = await VenueType.create(req.body);
    res.status(201).json(venueType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllVenueTypes = async (req, res) => {
  try {
    const venueTypes = await VenueType.findAll();
    res.status(200).json(venueTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getVenueTypeById = async (req, res) => {
  try {
    const venueType = await VenueType.findByPk(req.params.id);
    if (!venueType) return res.status(404).json({ error: 'Venue type not found' });
    res.status(200).json(venueType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateVenueType = async (req, res) => {
  try {
    const [updated] = await VenueType.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Venue type not found' });
    const updatedVenueType = await VenueType.findByPk(req.params.id);
    res.status(200).json(updatedVenueType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteVenueType = async (req, res) => {
  try {
    const deleted = await VenueType.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Venue type not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createVenueType,
  getAllVenueTypes,
  getVenueTypeById,
  updateVenueType,
  deleteVenueType,
};