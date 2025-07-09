const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.PG_URI,
});

/**
 * Récupère les `device_id` liés à un utilisateur.
 * @param {string|number} userId
 * @returns {Promise<string[]>}
 */
async function getDeviceIdsByUser(userId) {
  const result = await pool.query('SELECT device_id FROM devices WHERE user_id = $1', [userId]);
  return result.rows.map(row => row.device_id);
}

module.exports = {
  getDeviceIdsByUser,
};
