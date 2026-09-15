const CartItem = require('../models/cart_item');

const getAllCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.findAll();
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCartItemById = async (req, res) => {
  try {
    const cartItem = await CartItem.findByPk(req.params.id);
    if (!cartItem) return res.status(404).json({ message: 'Cart item not found' });
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCartItem = async (req, res) => {
  try {
    const { cart_id, ticket_id, quantity } = req.body;
    const newCartItem = await CartItem.create({ cart_id, ticket_id, quantity });
    res.status(201).json({ message: 'Cart item created successfully', cartItemId: newCartItem.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { cart_id, ticket_id, quantity } = req.body;

    const cartItem = await CartItem.findByPk(id);
    if (!cartItem) return res.status(404).json({ message: 'Cart item not found' });

    await cartItem.update({ cart_id, ticket_id, quantity });
    res.status(200).json({ message: 'Cart item updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const cartItem = await CartItem.findByPk(id);
    if (!cartItem) return res.status(404).json({ message: 'Cart item not found' });

    await cartItem.destroy();
    res.status(200).json({ message: 'Cart item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCartItems,
  getCartItemById,
  createCartItem,
  updateCartItem,
  deleteCartItem,
};