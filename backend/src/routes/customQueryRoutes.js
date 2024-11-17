// backend/routes/customQueryRoutes.js
const express = require('express');
const { executeCustomQuery } = require('../controllers/customQueryController');
const router = express.Router();

// Handle custom query as a GET request with query parameter
router.get('/', executeCustomQuery); 

module.exports = router;
