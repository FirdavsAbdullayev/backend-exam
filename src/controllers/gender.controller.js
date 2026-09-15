const Gender = require('../models/gender');

const getAllGenders = async (req, res) => {
  try {
    const genders = await Gender.findAll();
    res.status(200).json(genders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getGenderById = async (req, res) => {
  try {
    const gender = await Gender.findByPk(req.params.id);
    if (!gender) return res.status(404).json({ message: 'Gender not found' });
    res.status(200).json(gender);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createGender = async (req, res) => {
  try {
    const { name } = req.body;
    const newGender = await Gender.create({ name });
    res.status(201).json({ message: 'Gender created successfully', genderId: newGender.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateGender = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const gender = await Gender.findByPk(id);
    if (!gender) return res.status(404).json({ message: 'Gender not found' });

    await gender.update({ name });
    res.status(200).json({ message: 'Gender updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteGender = async (req, res) => {
  try {
    const { id } = req.params;
    const gender = await Gender.findByPk(id);
    if (!gender) return res.status(404).json({ message: 'Gender not found' });

    await gender.destroy();
    res.status(200).json({ message: 'Gender deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllGenders,
  getGenderById,
  createGender,
  updateGender,
  deleteGender,
};