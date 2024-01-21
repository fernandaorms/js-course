const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const registerController = require('./src/controllers/registerController');
const contactController = require('./src/controllers/contactController');
const { loginRequired } = require('./src/middlewares/middleware');


// Homepage Routes
route.get('/', homeController.index);


// Login Routes
route.get('/login', loginController.index);
route.post('/login', loginController.login);
route.get('/login/logout', loginController.logout);

// Register Routes
route.get('/register', registerController.index);
route.post('/register', registerController.register);

// Contact Routes
route.get('/contact', loginRequired, contactController.index);
route.post('/contact', loginRequired, contactController.create);

module.exports = route;