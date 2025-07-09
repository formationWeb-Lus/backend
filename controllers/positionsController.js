const Position = require('../models/Position');
const Device = require('../models/Device');

const getAllPositions = async (req, res) => {
  const userId = req.query.userId;
  console.log('🔍 Requête reçue avec userId:', userId);

  try {
    let positions;

    if (userId) {
      const devices = await Device.find({ user_id: userId });
      const deviceIds = devices.map(d => d.device_id);
      console.log('🔗 Devices trouvés :', deviceIds);

      positions = await Position.find({ vehiculeId: { $in: deviceIds } });
    } else {
      positions = await Position.find();
    }

    res.status(200).json(positions);
  } catch (err) {
    console.error('❌ Erreur dans getAllPositions :', err); // <-- très important !
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
};


// ✅ Positions filtrées par :userId (paramètre de l’URL)
const getPositionsByUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const devices = await Device.find({ user_id: userId });
    const deviceIds = devices.map(d => d.device_id);
    const positions = await Position.find({ vehiculeId: { $in: deviceIds } });
    res.status(200).json(positions);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
};

// ✅ Créer une position
const createPosition = async (req, res) => {
  const { vehiculeId, latitude, longitude, vitesse, timestamp } = req.body;

  const newPosition = new Position({
    vehiculeId,
    latitude,
    longitude,
    vitesse,
    timestamp,
  });

  try {
    await newPosition.save();
    res.status(201).json({ message: 'Position enregistrée', data: newPosition });
  } catch (err) {
    res.status(400).json({ message: 'Erreur lors de l\'enregistrement', error: err });
  }
};

// ✅ Modifier une position
const updatePosition = async (req, res) => {
  try {
    const updated = await Position.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Position non trouvée' });
    res.status(200).json({ message: 'Position mise à jour', data: updated });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour', error: err });
  }
};

// ✅ Supprimer une position
const deletePosition = async (req, res) => {
  try {
    const deleted = await Position.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Position non trouvée' });
    res.status(200).json({ message: 'Position supprimée avec succès' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la suppression', error: err });
  }
};

module.exports = {
  getAllPositions,
  getPositionsByUser, // ✅ TRÈS IMPORTANT !!
  createPosition,
  updatePosition,
  deletePosition,
};
