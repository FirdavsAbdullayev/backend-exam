const HumanCategory = require('../models/human_category');

const getAllHumanCategories = async (req, res) => {
  try {
    const categories = await HumanCategory.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getHumanCategoryById = async (req, res) => {
  try {
    const category = await HumanCategory.findByPk(req.params.id);
    if (!category) return res.status(404).json({ message: 'Human category not found' });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createHumanCategory = async (req, res) => {
  try {
    const { name, start_age, finish_age, gender } = req.body;
    const newCategory = await HumanCategory.create({ name, start_age, finish_age, gender });
    res.status(201).json({ message: 'Human category created successfully', humanCategoryId: newCategory.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateHumanCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, start_age, finish_age, gender } = req.body;

    const category = await HumanCategory.findByPk(id);
    if (!category) return res.status(404).json({ message: 'Human category not found' });

    await category.update({ name, start_age, finish_age, gender });
    res.status(200).json({ message: 'Human category updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteHumanCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await HumanCategory.findByPk(id);
    if (!category) return res.status(404).json({ message: 'Human category not found' });

    await category.destroy();
    res.status(200).json({ message: 'Human category deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllHumanCategories,
  getHumanCategoryById,
  createHumanCategory,
  updateHumanCategory,
  deleteHumanCategory,
};