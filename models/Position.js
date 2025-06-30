const mongoose = require('mongoose');

const positionSchema = new mongoose.Schema({
  vehiculeId: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  vitesse: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Position = mongoose.model('Position', positionSchema);

module.exports = Position;
