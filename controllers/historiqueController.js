const Position = require('../models/Position');
const Stop = require('../models/stop');

function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function calculateTotalDistance(positions) {
  let total = 0;
  for (let i = 1; i < positions.length; i++) {
    const prev = positions[i - 1];
    const curr = positions[i];
    total += calculateDistanceKm(prev.latitude, prev.longitude, curr.latitude, curr.longitude);
  }
  return Math.round(total * 100) / 100;
}

exports.getHistorique = async (req, res) => {
  const { vehiculeId, date } = req.params;
  const start = new Date(`${date}T00:00:00`);
  const end = new Date(`${date}T23:59:59`);

  const positions = await Position.find({ vehiculeId, timestamp: { $gte: start, $lte: end } }).sort('timestamp');
  const stops = await Stop.find({ vehiculeId, timestamp: { $gte: start, $lte: end } });

  if (!positions.length) return res.status(404).json({ message: 'Aucune donnée pour ce jour' });

  const totalDistance = calculateTotalDistance(positions);
  const totalStopTimeSeconds = stops.reduce((sum, stop) => sum + stop.duration_seconds, 0);

  res.json({
    vehicule: vehiculeId,
    date,
    distance_km: totalDistance,
    start_time: positions[0].timestamp,
    end_time: positions[positions.length - 1].timestamp,
    total_stops: stops.length,
    total_stop_time: `${Math.round(totalStopTimeSeconds / 60)} minutes`,
    stops
  });
};
