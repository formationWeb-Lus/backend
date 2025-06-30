const mongoose = require('mongoose');

const historiqueSchema = new mongoose.Schema({
  vehicule: String,
  date: String,
  distance_km: Number,
  start_time: String,
  end_time: String,
  total_stops: Number,
  total_stop_time: String,
  positions: [
    {
      latitude: Number,
      longitude: Number,
      duree: String,
      quartier: String,
      avenue: String
    }
  ]
});

module.exports = mongoose.model('Historique', historiqueSchema);
