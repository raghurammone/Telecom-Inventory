const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./authRoutes'); // Import routes

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Routes
app.use('/api/auth', authRoutes); // Use authentication routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});