const { model, Schema } = require('mongoose');

const bookingSchema = new Schema({
  plate_number: String,
  car_type: String,
  paid: Boolean,
  date: String,
  parked: Boolean,
  createdAt: String,
  duration: String,
  parking_type: String,
  parking_place: String,
});

module.exports = model('Booking', bookingSchema);
