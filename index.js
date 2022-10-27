const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const courseData = require('./data/courseData.json');

app.get('/', (req, res) => {
    res.send('api running..');
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courseData', (req, res) => {
    res.send(courseData);
});

app.get('/course/:id', (req,res) => {
    const id = req.params.id;
    const eachCourse = courseData.find(c => c.id == id);
    res.send(eachCourse);
});

app.listen(port, () => {
    console.log('server running on port', port);
});


module.exports = app;