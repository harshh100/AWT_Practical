const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

app.use('/dashboard', (req, res, next) => {
    const token = req.cookies.token;
  
    if (!token) {
      return res.redirect('/auth/login');
    }
  
    jwt.verify(token, 'secret-key', (err, decoded) => {
      if (err) {
        return res.redirect('/auth/login');
      }
  
      req.user = decoded;
      next();
    });
  });
  
  app.get('/dashboard', (req, res) => {
    res.send(`Welcome to the website my friend 😊, ${req.user.username}!`);
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
