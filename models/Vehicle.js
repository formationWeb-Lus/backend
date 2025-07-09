// models/Vehicle.js (MongoDB)
const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  vehiculeId: { type: String, required: true, unique: true },
  userId: { type: Number, required: true }, // Lien avec l'utilisateur PostgreSQL
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
