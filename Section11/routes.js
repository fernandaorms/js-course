const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const registerController = require('./src/controllers/registerController');


// Homepage Routes
route.get('/', homeController.index);


// Login Routes
route.get('/login', loginController.index);
route.post('/login', loginController.login);


// Register Routes
route.get('/register', registerController.index);
route.post('/register', registerController.register);

module.exports = route;