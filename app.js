const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const historiqueRoutes = require('./routes/historique');
require('dotenv').config();

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();
const port = process.env.PORT || 3000;

app.use('/api/historique', historiqueRoutes);
app.use(cors());
app.use(express.json());

// Swagger route (très important)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes API
const positionRoutes = require('./routes/positions-route'); // ✅ Correct

app.use('/api/positions', positionRoutes);

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connexion MongoDB réussie'))
  .catch(err => console.error('❌ Erreur MongoDB:', err));

app.listen(port, () => {
  console.log(`✅ API REST en écoute sur https://backend-ojdz.onrender.com/api:${port}`);
});
