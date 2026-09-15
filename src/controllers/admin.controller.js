const Admin = require('../models/admin');

const createAdmin = async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (!admin) return res.status(404).json({ error: 'Admin not found' });
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAdmin = async (req, res) => {
  try {
    const [updated] = await Admin.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Admin not found' });
    const updatedAdmin = await Admin.findByPk(req.params.id);
    res.status(200).json(updatedAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const deleted = await Admin.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Admin not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAdmin,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
};