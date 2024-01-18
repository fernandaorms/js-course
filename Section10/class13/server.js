require('dotenv').config();
const PORT = 3002;

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTR)
    .then(() => {
        app.emit('ready');
    })
    .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');

const { globalMiddleware } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


const MongoStore = require('connect-mongo');
const session = require('express-session');
const flash = require('connect-flash');

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


// Custom Middlewares
app.use(globalMiddleware);

app.use(routes);


app.on('ready', () => {
    app.listen(PORT, () => {
        console.log(`Access: http://localhost:${PORT}`);
        console.log('Server running at port', PORT);
    });
});
