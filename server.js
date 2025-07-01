
const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

// API route to get employee data
app.get('/api/employees', (req, res) => {
  fs.readFile('./data/employees.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error loading employee data');
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});