require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const path = require('path');
const routes = require('./routes');
const { globalMiddleware } = require('./src/middlewares/middleware');

const PORT = 3002;

const app = express();


// Config - Database Connection
mongoose.connect(process.env.CONNECTIONSTR)
    .then(() => {
        app.emit('ready');
    })
    .catch(e => console.log(e));


// Config - Express-Session and Flash
app.use(
    session({
        secret: 'yourSecretKeyHere',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true
        },
        store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTR })
    })
);
app.use(flash());


// Config - Express (Static, Views, Middlewares)
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(globalMiddleware);


// Config - Routes and Server Initialization
app.use(routes);

app.on('ready', () => {
    app.listen(PORT, () => {
        console.log(`Access: http://localhost:${PORT}`);
        console.log('Server running at port', PORT);
    });
});
