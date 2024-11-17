// backend/server.js
const app = require('./src/app.js');
const PORT = process.env.PORT || 3307;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
