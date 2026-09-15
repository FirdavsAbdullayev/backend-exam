const VenuePhoto = require('../models/venue_photo');

const getAllVenuePhotos = async (req, res) => {
  try {
    const photos = await VenuePhoto.findAll();
    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getVenuePhotoById = async (req, res) => {
  try {
    const photo = await VenuePhoto.findByPk(req.params.id);
    if (!photo) return res.status(404).json({ message: 'Venue photo not found' });
    res.status(200).json(photo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createVenuePhoto = async (req, res) => {
  try {
    const { venue_id, url } = req.body;
    const newPhoto = await VenuePhoto.create({ venue_id, url });
    res.status(201).json({ message: 'Venue photo created successfully', venuePhotoId: newPhoto.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateVenuePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    const { venue_id, url } = req.body;

    const photo = await VenuePhoto.findByPk(id);
    if (!photo) return res.status(404).json({ message: 'Venue photo not found' });

    await photo.update({ venue_id, url });
    res.status(200).json({ message: 'Venue photo updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteVenuePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    const photo = await VenuePhoto.findByPk(id);
    if (!photo) return res.status(404).json({ message: 'Venue photo not found' });

    await photo.destroy();
    res.status(200).json({ message: 'Venue photo deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllVenuePhotos,
  getVenuePhotoById,
  createVenuePhoto,
  updateVenuePhoto,
  deleteVenuePhoto,
};