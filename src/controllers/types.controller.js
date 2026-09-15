const Type = require('../models/types');

const getAllTypes = async (req, res) => {
  try {
    const types = await Type.findAll();
    res.status(200).json(types);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTypeById = async (req, res) => {
  try {
    const type = await Type.findByPk(req.params.id);
    if (!type) return res.status(404).json({ message: 'Type not found' });
    res.status(200).json(type);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createType = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newType = await Type.create({ name, description });
    res.status(201).json({ message: 'Type created successfully', typeId: newType.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateType = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const type = await Type.findByPk(id);
    if (!type) return res.status(404).json({ message: 'Type not found' });

    await type.update({ name, description });
    res.status(200).json({ message: 'Type updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteType = async (req, res) => {
  try {
    const { id } = req.params;
    const type = await Type.findByPk(id);
    if (!type) return res.status(404).json({ message: 'Type not found' });

    await type.destroy();
    res.status(200).json({ message: 'Type deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTypes,
  getTypeById,
  createType,
  updateType,
  deleteType,
};