const District = require('../models/district');

const getAllDistricts = async (req, res) => {
  try {
    const districts = await District.findAll();
    res.status(200).json(districts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDistrictById = async (req, res) => {
  try {
    const district = await District.findByPk(req.params.id);
    if (!district) return res.status(404).json({ message: 'District not found' });
    res.status(200).json(district);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createDistrict = async (req, res) => {
  try {
    const { name, region_id } = req.body;
    const newDistrict = await District.create({ name, region_id });
    res.status(201).json({ message: 'District created successfully', districtId: newDistrict.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDistrict = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, region_id } = req.body;

    const district = await District.findByPk(id);
    if (!district) return res.status(404).json({ message: 'District not found' });

    await district.update({ name, region_id });
    res.status(200).json({ message: 'District updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteDistrict = async (req, res) => {
  try {
    const { id } = req.params;
    const district = await District.findByPk(id);
    if (!district) return res.status(404).json({ message: 'District not found' });

    await district.destroy();
    res.status(200).json({ message: 'District deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllDistricts,
  getDistrictById,
  createDistrict,
  updateDistrict,
  deleteDistrict,
};