
const bcrypt = require('bcryptjs');

const users = [
  {
    username: 'admin',
    password: '$2a$10$MzpA9jwK.lW9f0j2eZXYWuR.KUy0rBl0hKzJwrbbtdEOl7NOo6bsi', // Hashed password for "admin123"
    role: 'admin'
  },
  {
    username: 'manager',
    password: '$2a$10$KjPfX/WbHwZyGm5WpaAhqf/9uX2Gb9zP/T8tbex/PBQunpKfPjBmy', // Hashed password for "manager123"
    role: 'manager'
  }
];

// Function to get user by username
const getUserByUsername = (username) => {
  return users.find(user => user.username === username);
};

// Function to compare password
const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = { getUserByUsername, comparePassword };
