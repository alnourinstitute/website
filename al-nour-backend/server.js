const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'al_nour'
});

db.connect(err => {
  if (err) throw err;
  console.log('✅ MySQL Connected');
});

// 2️⃣ REGISTER ROUTE
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(sql, [name, email, hashedPassword], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ message: 'Error: Email may already exist' });
    }
    res.send({ message: 'Registration successful' });
  });
});

// 3️⃣ LOGIN ROUTE
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).send({ message: 'Invalid credentials' });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ message: 'Invalid credentials' });
    }

    res.send({
      message: 'Login successful',
      user: { id: user.id, name: user.name, role: user.role }
    });
  });
});

// 4️⃣ START SERVER
app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});
