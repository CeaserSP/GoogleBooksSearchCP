const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const userCon = require('./controllers/userController');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../build')));
app.use(express.static(path.join(__dirname, '../client')));

app.use('/', router.get('/', function(req, res, next){
    res.sendfile(path.join(__dirname, '../index.html'))
}));

app.post('createUser', userCon.createNewUser);
app.post('confirmUser', userCon.authenticate);

module.exports = app;