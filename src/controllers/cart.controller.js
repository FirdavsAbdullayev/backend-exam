const Cart = require('../models/cart');

const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.findAll();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCartById = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    if (!cart) return res.status(404).json({ message: 'Cart not found' });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCart = async (req, res) => {
  try {
    const { customer_id, total_amount, status } = req.body;
    const newCart = await Cart.create({ customer_id, total_amount, status });
    res.status(201).json({ message: 'Cart created successfully', cartId: newCart.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { customer_id, total_amount, status } = req.body;

    const cart = await Cart.findByPk(id);
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    await cart.update({ customer_id, total_amount, status });
    res.status(200).json({ message: 'Cart updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findByPk(id);
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    await cart.destroy();
    res.status(200).json({ message: 'Cart deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCarts,
  getCartById,
  createCart,
  updateCart,
  deleteCart,
};