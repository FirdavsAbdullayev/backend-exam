const Discount = require('../models/discount');

const getAllDiscounts = async (req, res) => {
  try {
    const discounts = await Discount.findAll();
    res.status(200).json(discounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDiscountById = async (req, res) => {
  try {
    const discount = await Discount.findByPk(req.params.id);
    if (!discount) return res.status(404).json({ message: 'Discount not found' });
    res.status(200).json(discount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createDiscount = async (req, res) => {
  try {
    const { discount, end_date } = req.body;
    const newDiscount = await Discount.create({ discount, end_date });
    res.status(201).json({ message: 'Discount created successfully', discountId: newDiscount.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDiscount = async (req, res) => {
  try {
    const { id } = req.params;
    const { discount, end_date } = req.body;

    const discountItem = await Discount.findByPk(id);
    if (!discountItem) return res.status(404).json({ message: 'Discount not found' });

    await discountItem.update({ discount, end_date });
    res.status(200).json({ message: 'Discount updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteDiscount = async (req, res) => {
  try {
    const { id } = req.params;
    const discount = await Discount.findByPk(id);
    if (!discount) return res.status(404).json({ message: 'Discount not found' });

    await discount.destroy();
    res.status(200).json({ message: 'Discount deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllDiscounts,
  getDiscountById,
  createDiscount,
  updateDiscount,
  deleteDiscount,
};