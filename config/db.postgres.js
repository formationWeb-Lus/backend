const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'gpsrdc',   // 👈 Ton vrai nom de base
  password: '',         // 👈 Vide si tu n’as pas défini de mot de passe
  port: 5432
});

module.exports = pool;
