// ✅ models/Device.js
const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  device_id: { type: String, required: true },
  user_id: { type: Number, required: true }  // ou String si tes user_id sont des strings
});

module.exports = mongoose.model('Device', deviceSchema); // ⚠️ ceci est très important

