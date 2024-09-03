const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time_slot: {
    type: String,
    required: true
  },
  seat_number: [{
    type: Number,
    required: true
  }]
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
