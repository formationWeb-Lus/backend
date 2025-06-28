const Position = require('../models/position'); 

const getAllPositions = async (req, res) => {
  const positions = await Position.find();
  res.status(200).json(positions);
};

const createPosition = async (req, res) => {
  const position = new Position(req.body);
  await position.save();
  res.status(201).json(position);
};

const updatePosition = async (req, res) => {
  try {
    const updated = await Position.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Erreur mise à jour position' });
  }
};

const deletePosition = async (req, res) => {
  try {
    await Position.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Position supprimée' });
  } catch (err) {
    res.status(500).json({ error: 'Erreur suppression position' });
  }
};

module.exports = {
  getAllPositions,
  createPosition,
  updatePosition,
  deletePosition
};
