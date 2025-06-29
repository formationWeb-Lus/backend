const express = require('express');
const app = express();
const pgRoutes = require('./routes/subRoutes');

app.use(express.json());
app.use('/api', pgRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ API REST PostgreSQL en écoute sur http://localhost:${PORT}`);
});
