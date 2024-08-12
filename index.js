// index.js
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const db = require('./config/db');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/users', (req, res) => {
  const query = 'SELECT * FROM users'; // Assuming the table is named 'users'
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
