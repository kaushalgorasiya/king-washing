const express = require('express');
const router = express.Router();

// Sample data store for bookings
let bookings = [];

// Create a new booking
router.post('/', (req, res) => {
    const newBooking = req.body;
    bookings.push(newBooking);
    res.status(201).json(newBooking);
});

// Read all bookings
router.get('/', (req, res) => {
    res.status(200).json(bookings);
});

// Update a booking
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedBooking = req.body;
    bookings = bookings.map(booking => booking.id === id ? updatedBooking : booking);
    res.status(200).json(updatedBooking);
});

// Delete a booking
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    bookings = bookings.filter(booking => booking.id !== id);
    res.status(204).send();
});

module.exports = router;