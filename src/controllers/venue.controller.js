const Venue = require('../models/venue');

const getAllVenues = async (req, res) => {
  try {
    const venues = await Venue.findAll();
    res.status(200).json(venues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getVenueById = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.id);
    if (!venue) return res.status(404).json({ message: 'Venue not found' });
    res.status(200).json(venue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createVenue = async (req, res) => {
  try {
    const { name, address, location, site, phone, venue_type_id, region_id, district_id } = req.body;
    const newVenue = await Venue.create({ name, address, location, site, phone, venue_type_id, region_id, district_id });
    res.status(201).json({ message: 'Venue created successfully', venueId: newVenue.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateVenue = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, location, site, phone, venue_type_id, region_id, district_id } = req.body;

    const venue = await Venue.findByPk(id);
    if (!venue) return res.status(404).json({ message: 'Venue not found' });

    await venue.update({ name, address, location, site, phone, venue_type_id, region_id, district_id });
    res.status(200).json({ message: 'Venue updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteVenue = async (req, res) => {
  try {
    const { id } = req.params;
    const venue = await Venue.findByPk(id);
    if (!venue) return res.status(404).json({ message: 'Venue not found' });

    await venue.destroy();
    res.status(200).json({ message: 'Venue deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllVenues,
  getVenueById,
  createVenue,
  updateVenue,
  deleteVenue,
};