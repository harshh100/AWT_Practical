const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const { validateFields } = require('./middleware');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/add-course', (req, res) => {
    res.render('course-form');
});

app.post('/create-course', validateFields, (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { universityName, instituteName, departmentName, courseName, courseCode, semester } = req.body;

    res.render('course-details', {
        universityName,
        instituteName,
        departmentName,
        courseName,
        courseCode,
        semester,
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

