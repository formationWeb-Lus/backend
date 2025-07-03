// backend/server.js ou app.js (selon ta config)
const express = require('express');
const app = express();
app.use(express.json());

const authRoutes = require('./routes/authRoutes');

app.use('/api/auth', authRoutes);

// Autres routes...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
