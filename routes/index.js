const express = require('express');
const authRoutes = require('./auth');

const router = express.Router();

router.use('/auth', authRoutes);

// health check
router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = router;