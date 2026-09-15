const Country = require('../models/country');

const getAllCountries = async (req, res) => {
  try {
    const countries = await Country.findAll();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCountryById = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);
    if (!country) return res.status(404).json({ message: 'Country not found' });
    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCountry = async (req, res) => {
  try {
    const { name, code } = req.body;
    const newCountry = await Country.create({ name, code });
    res.status(201).json({ message: 'Country created successfully', countryId: newCountry.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, code } = req.body;

    const country = await Country.findByPk(id);
    if (!country) return res.status(404).json({ message: 'Country not found' });

    await country.update({ name, code });
    res.status(200).json({ message: 'Country updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const country = await Country.findByPk(id);
    if (!country) return res.status(404).json({ message: 'Country not found' });

    await country.destroy();
    res.status(200).json({ message: 'Country deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCountries,
  getCountryById,
  createCountry,
  updateCountry,
  deleteCountry,
};