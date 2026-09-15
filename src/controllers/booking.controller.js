const Booking = require('../models/booking');

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createBooking = async (req, res) => {
  try {
    const { cart_id, payment_method_id, delivery_method_id, discount_id, status_id } = req.body;
    const newBooking = await Booking.create({
      cart_id,
      payment_method_id,
      delivery_method_id,
      discount_id,
      status_id,
    });
    res.status(201).json({ message: 'Booking created successfully', bookingId: newBooking.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { cart_id, payment_method_id, delivery_method_id, discount_id, status_id } = req.body;

    const booking = await Booking.findByPk(id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    await booking.update({ cart_id, payment_method_id, delivery_method_id, discount_id, status_id });
    res.status(200).json({ message: 'Booking updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findByPk(id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    await booking.destroy();
    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
};