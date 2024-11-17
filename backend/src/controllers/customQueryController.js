// backend/controllers/customQueryController.js
const pool = require('../config/db');

exports.executeCustomQuery = async (req, res) => {
    const { query } = req.query;  // Get query from URL parameters

    if (!query) {
        return res.status(400).json({ message: 'No query provided' });
    }

    try {
        console.log("Executing query:", query);  // Log the query for debugging
        const [rows] = await pool.execute(query); // Execute the query safely
        console.log("Query result:", rows);  // Log the result to ensure it's correct
        res.json(rows);  // Send the result as the response
    } catch (error) {
        console.error("Error executing query:", error);  // Log the error for debugging
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};
