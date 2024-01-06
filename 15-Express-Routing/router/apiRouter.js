const express = require('express');
const router = express.Router();
const path = require('path');

// logic 
// get  home
router.get('/', (request,response) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
});

// get about
router.get('/about', (request,response) => {
    response.sendFile(path.join(__dirname,  '..', 'views', 'about.html'))
});

// get contact
router.get('/contact', (request,response) => {
    response.sendFile(path.join(__dirname,  '..', 'views', 'contact.html'))
});

// get services
router.get('/services', (request,response) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'services.html'))
});




module.exports = router;
