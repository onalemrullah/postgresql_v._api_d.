const express = require('express');
const { Pool } = require('pg');

// PostgreSQL bağlantı bilgilerini buraya girin
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'BigDb',
  password: 'emrullah',
  port: 5432,
});

const app = express();
const port = 3000;

app.use(express.json());

// API yollarını burada tanımlayın

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


app.get('/users', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM users');
      const users = result.rows;
      res.json(users);
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
  });

  const cors = require('cors');
  app.use(cors());