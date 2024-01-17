const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

// Homepage Routes
route.get('/', homeController.homepage);
route.post('/', homeController.sendForm);

// Contact Routes
route.get('/contact', contactController.contact);


module.exports = route;