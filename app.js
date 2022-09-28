require('dotenv').config();

const express = require('express');
const fileupload = require('express-fileupload');
const path = require('path');
const router = require('./routes')
const session = require('express-session');

const app = express();

app.use(session({
    secret: '987f4bd6d4315c10b2ec70a46',
    saveUninitialized: false,
    resave: true,
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(fileupload());

app.use(router);

app.listen(5000, () => {
    console.log(`Server running at http://localhost:5000`)
})
