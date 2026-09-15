const PaymentMethod = require('../models/payment_method');

const getAllPaymentMethods = async (req, res) => {
  try {
    const paymentMethods = await PaymentMethod.findAll();
    res.status(200).json(paymentMethods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPaymentMethodById = async (req, res) => {
  try {
    const paymentMethod = await PaymentMethod.findByPk(req.params.id);
    if (!paymentMethod) return res.status(404).json({ message: 'Payment method not found' });
    res.status(200).json(paymentMethod);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createPaymentMethod = async (req, res) => {
  try {
    const { name } = req.body;
    const newPaymentMethod = await PaymentMethod.create({ name });
    res.status(201).json({ message: 'Payment method created successfully', paymentMethodId: newPaymentMethod.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePaymentMethod = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const paymentMethod = await PaymentMethod.findByPk(id);
    if (!paymentMethod) return res.status(404).json({ message: 'Payment method not found' });

    await paymentMethod.update({ name });
    res.status(200).json({ message: 'Payment method updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePaymentMethod = async (req, res) => {
  try {
    const { id } = req.params;
    const paymentMethod = await PaymentMethod.findByPk(id);
    if (!paymentMethod) return res.status(404).json({ message: 'Payment method not found' });

    await paymentMethod.destroy();
    res.status(200).json({ message: 'Payment method deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllPaymentMethods,
  getPaymentMethodById,
  createPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
};