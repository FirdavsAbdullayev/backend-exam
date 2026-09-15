const DeliveryMethod = require('../models/delivery_method');

const getAllDeliveryMethods = async (req, res) => {
  try {
    const methods = await DeliveryMethod.findAll();
    res.status(200).json(methods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDeliveryMethodById = async (req, res) => {
  try {
    const method = await DeliveryMethod.findByPk(req.params.id);
    if (!method) return res.status(404).json({ message: 'Delivery method not found' });
    res.status(200).json(method);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createDeliveryMethod = async (req, res) => {
  try {
    const { name } = req.body;
    const newMethod = await DeliveryMethod.create({ name });
    res.status(201).json({ message: 'Delivery method created successfully', deliveryMethodId: newMethod.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDeliveryMethod = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const method = await DeliveryMethod.findByPk(id);
    if (!method) return res.status(404).json({ message: 'Delivery method not found' });

    await method.update({ name });
    res.status(200).json({ message: 'Delivery method updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteDeliveryMethod = async (req, res) => {
  try {
    const { id } = req.params;
    const method = await DeliveryMethod.findByPk(id);
    if (!method) return res.status(404).json({ message: 'Delivery method not found' });

    await method.destroy();
    res.status(200).json({ message: 'Delivery method deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllDeliveryMethods,
  getDeliveryMethodById,
  createDeliveryMethod,
  updateDeliveryMethod,
  deleteDeliveryMethod,
};