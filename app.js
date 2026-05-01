const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up EJS for templating
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home | Tiger Youth Transport' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us | Tiger Youth Transport' });
});

app.get('/services', (req, res) => {
    res.render('services', { title: 'Our Services | Tiger Youth Transport' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us | Tiger Youth Transport' });
});

app.get('/book', (req, res) => {
    res.render('book', { title: 'Book Now | Tiger Youth Transport' });
});

app.get('/team', (req, res) => {
    res.render('team', { title: 'Our Team | Tiger Youth Transport' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Tiger Youth Transport Server running on http://localhost:${PORT}`);
});
