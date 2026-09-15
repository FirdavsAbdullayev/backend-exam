const Lang = require('../models/lang');

const getAllLangs = async (req, res) => {
  try {
    const langs = await Lang.findAll();
    res.status(200).json(langs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getLangById = async (req, res) => {
  try {
    const lang = await Lang.findByPk(req.params.id);
    if (!lang) return res.status(404).json({ message: 'Lang not found' });
    res.status(200).json(lang);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createLang = async (req, res) => {
  try {
    const { name, code } = req.body;
    const newLang = await Lang.create({ name, code });
    res.status(201).json({ message: 'Lang created successfully', langId: newLang.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateLang = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, code } = req.body;

    const lang = await Lang.findByPk(id);
    if (!lang) return res.status(404).json({ message: 'Lang not found' });

    await lang.update({ name, code });
    res.status(200).json({ message: 'Lang updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteLang = async (req, res) => {
  try {
    const { id } = req.params;
    const lang = await Lang.findByPk(id);
    if (!lang) return res.status(404).json({ message: 'Lang not found' });

    await lang.destroy();
    res.status(200).json({ message: 'Lang deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllLangs,
  getLangById,
  createLang,
  updateLang,
  deleteLang,
};