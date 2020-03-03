// const express = require('express');
// const app = express();
// const cookieParser = require('cookie-parser');
// const path = require('path');
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
// const userCon = require('./controllers/userController');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, '../build')));
// app.use(express.static(path.join(__dirname, '../client')));

// app.use('/', router.get('/', function(req, res, next){
//     res.sendfile(path.join(__dirname, '../index.html'))
// }));

// app.post('createUser', userCon.createNewUser);
// app.post('confirmUser', userCon.authenticate);

// module.exports = app;

const dotenv = require("dotenv");
dotenv.config();
const routes = require("./routes");
const mongoose = require("mongoose");
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const socket = require('socket.io').listen(server);
const PORT = process.env.PORT || 3001;
 
socket.on('connection', client => {
  client.on('notifyUser', () => {
    console.log('Saving book to db!');
    client.emit('timer', new Date());
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks", { useNewUrlParser: true });

server.listen(PORT, () => {
  console.log(`Server listing on port ${PORT}`);
});