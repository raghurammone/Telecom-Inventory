const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const mysql = require('mysql2');
const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'telecom_inventory'
});

const SECRET_KEY = 'your_secret_key';

// User login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) return res.status(500).send('Database error');

    if (results.length === 0) return res.status(404).send('User not found');

    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).send('Error comparing password');
      if (!isMatch) return res.status(400).send('Invalid credentials');

      const token = jwt.encode({ id: user.id, role: user.role }, SECRET_KEY);
      res.json({ token });
    });
  });
});

// Protected route example
app.get('/api/products', (req, res) => {
  const token = req.headers['authorization'];

  if (!token) return res.status(401).send('Token required');

  try {
    const decoded = jwt.decode(token, SECRET_KEY);
    // Only allow if user role is Admin or Manager
    if (decoded.role !== 'Admin' && decoded.role !== 'Manager') {
      return res.status(403).send('Access denied');
    }

    db.query('SELECT * FROM products', (err, results) => {
      if (err) return res.status(500).send('Database error');
      res.json(results);
    });
  } catch (e) {
    res.status(401).send('Invalid or expired token');
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

