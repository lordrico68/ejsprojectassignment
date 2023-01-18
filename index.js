const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

let subjects = ['mathematics', 'english', 'biology', 'economics', 'civic education'];

app.get('/', (req, res) => {
    res.status(300).render('index', {pageTitle: 'Home Page', schools: subjects});
});

app.post ('/', (req, res) => {
    const subject = req.body.subject;
    subjects.push(subject);
    // console.log(subject);
    // res.status(302).send('subject is added');
    res.redirect('/');
});
app.get('/about', (req, res) => {
    res.status(300).render('about', {pageTitle: 'About Us'});
});

app.get('/services', (req, res) => {
    res.status(300).render('services', {pageTitle: 'Our Services'});
});

app.get('/contact', (req, res) => {
    res.status(300).render('contact', {pageTitle: 'Contact Us'});
});

app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});