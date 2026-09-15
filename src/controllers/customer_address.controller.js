const CustomerAddress = require('../models/customer_address');

const getAllCustomerAddresses = async (req, res) => {
  try {
    const addresses = await CustomerAddress.findAll();
    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCustomerAddressById = async (req, res) => {
  try {
    const address = await CustomerAddress.findByPk(req.params.id);
    if (!address) return res.status(404).json({ message: 'Customer address not found' });
    res.status(200).json(address);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCustomerAddress = async (req, res) => {
  try {
    const { customer_id, name, street, house, flat, location, post_index, district_id } = req.body;
    const newAddress = await CustomerAddress.create({
      customer_id,
      name,
      street,
      house,
      flat,
      location,
      post_index,
      district_id,
    });
    res.status(201).json({ message: 'Customer address created successfully', addressId: newAddress.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCustomerAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const { customer_id, name, street, house, flat, location, post_index, district_id } = req.body;

    const address = await CustomerAddress.findByPk(id);
    if (!address) return res.status(404).json({ message: 'Customer address not found' });

    await address.update({
      customer_id,
      name,
      street,
      house,
      flat,
      location,
      post_index,
      district_id,
    });
    res.status(200).json({ message: 'Customer address updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCustomerAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const address = await CustomerAddress.findByPk(id);
    if (!address) return res.status(404).json({ message: 'Customer address not found' });

    await address.destroy();
    res.status(200).json({ message: 'Customer address deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCustomerAddresses,
  getCustomerAddressById,
  createCustomerAddress,
  updateCustomerAddress,
  deleteCustomerAddress,
};