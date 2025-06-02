const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db'); // Import DB connection

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Test route to check server and DB connection
app.get('/', (req, res) => {
  db.query('SELECT NOW()', (err, results) => {
    if (err) {
      return res.status(500).send('Database error');
    }
    res.send(`Server is running. DB time: ${results[0]['NOW()']}`);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
