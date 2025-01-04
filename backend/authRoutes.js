
const express = require('express');
const jwt = require('jsonwebtoken');
const { getUserByUsername, comparePassword } = require('./userModel');
const dotenv = require('dotenv');

dotenv.config();
const router = express.Router();

// Login Route
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  const user = getUserByUsername(username);
  if (!user) return res.status(404).send('User not found');
  
  const isPasswordValid = comparePassword(password, user.password);
  if (!isPasswordValid) return res.status(401).send('Invalid password');
  
  // Create JWT token
  const token = jwt.sign({ username: user.username, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
  
  res.json({ token });
});

module.exports = router;
