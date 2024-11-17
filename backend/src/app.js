// backend/app.js
const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173' 
}));

app.use(express.json());
  
app.use('/api/custom-query', require('./routes/customQueryRoutes.js'));

module.exports = app;
