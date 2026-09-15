const Region = require('../models/region');

const getAllRegions = async (req, res) => {
  try {
    const regions = await Region.findAll();
    res.status(200).json(regions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRegionById = async (req, res) => {
  try {
    const region = await Region.findByPk(req.params.id);
    if (!region) return res.status(404).json({ message: 'Region not found' });
    res.status(200).json(region);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createRegion = async (req, res) => {
  try {
    const { name, code } = req.body;
    const newRegion = await Region.create({ name, code });
    res.status(201).json({ message: 'Region created successfully', regionId: newRegion.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRegion = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, code } = req.body;

    const region = await Region.findByPk(id);
    if (!region) return res.status(404).json({ message: 'Region not found' });

    await region.update({ name, code });
    res.status(200).json({ message: 'Region updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteRegion = async (req, res) => {
  try {
    const { id } = req.params;
    const region = await Region.findByPk(id);
    if (!region) return res.status(404).json({ message: 'Region not found' });

    await region.destroy();
    res.status(200).json({ message: 'Region deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllRegions,
  getRegionById,
  createRegion,
  updateRegion,
  deleteRegion,
};