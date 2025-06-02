const db = require('../config/db');

// GET all users
exports.getUsers = (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
};

// ADD a new user
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email required' });
  }

  db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database insert error' });
    }
    res.status(201).json({ message: 'User created', userId: result.insertId });
  });
};
