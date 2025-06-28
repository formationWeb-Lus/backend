const mongoose = require('mongoose');

const positionSchema = new mongoose.Schema({
  vehiculeId: String,
  latitude: Number,
  longitude: Number,
  vitesse: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Position', positionSchema);
