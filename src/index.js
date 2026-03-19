const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// TODO: Mount route modules here
// app.use('/api/projects', require('./routes/projects'));
// app.use('/api/members', require('./routes/members'));

// Only start server when run directly (not when imported by tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`NF Project Portal running on port ${PORT}`);
  });
}

module.exports = app;
