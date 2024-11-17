// src/utils/queryUtils.js
import axios from 'axios';

/**
 * Executes a custom SQL query and returns the result.
 * @param {string} query - The SQL query to execute.
 * @returns {Promise<object>} - Promise resolving to the query result or rejecting with an error.
 */
export const executeCustomQuery = async (query) => {
    try {
        const encodedQuery = encodeURIComponent(query);
        const response = await axios.get(`http://localhost:8000/api/custom-query?query=${encodedQuery}`);
        return response.data;  // Return query result
    } catch (error) {
        console.error("Error executing query:", error);
        throw new Error('Error executing SQL query');  // Throw error to handle it in the component
    }
};
