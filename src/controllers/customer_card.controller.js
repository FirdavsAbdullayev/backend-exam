const CustomerCard = require('../models/customer_card');

const getAllCustomerCards = async (req, res) => {
  try {
    const customerCards = await CustomerCard.findAll();
    res.status(200).json(customerCards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCustomerCardById = async (req, res) => {
  try {
    const customerCard = await CustomerCard.findByPk(req.params.id);
    if (!customerCard) return res.status(404).json({ message: 'Customer card not found' });
    res.status(200).json(customerCard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCustomerCard = async (req, res) => {
  try {
    const newCustomerCard = await CustomerCard.create(req.body);
    res.status(201).json({ message: 'Customer card created successfully', customerCard: newCustomerCard });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCustomerCard = async (req, res) => {
  try {
    const { id } = req.params;
    const customerCard = await CustomerCard.findByPk(id);
    if (!customerCard) return res.status(404).json({ message: 'Customer card not found' });

    await customerCard.update(req.body);
    res.status(200).json({ message: 'Customer card updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCustomerCard = async (req, res) => {
  try {
    const { id } = req.params;
    const customerCard = await CustomerCard.findByPk(id);
    if (!customerCard) return res.status(404).json({ message: 'Customer card not found' });

    await customerCard.destroy();
    res.status(200).json({ message: 'Customer card deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCustomerCards,
  getCustomerCardById,
  createCustomerCard,
  updateCustomerCard,
  deleteCustomerCard,
};