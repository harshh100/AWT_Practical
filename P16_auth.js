const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const users = [];

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const userExists = users.some((user) => user.username === username);
  if (userExists) {
    return res.status(400).send('User already exists');
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const user = { username, password: hashedPassword };
  users.push(user);

  res.redirect('/auth/login');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(401).send('User not found');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).send('Incorrect password');
  }

  const token = jwt.sign({ username }, 'secret-key', { expiresIn: '1h' });
  res.cookie('token', token, { httpOnly: true });

  res.redirect('/dashboard'); 
});

module.exports = router;

