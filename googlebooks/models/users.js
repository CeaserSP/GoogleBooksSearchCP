const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcrypt');

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks";
mongoose.connect(MONGODB_URI);
mongoose.connection.once('open', () => {
    console.log('connected with mongo ORM')
})

let userSchema = mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

