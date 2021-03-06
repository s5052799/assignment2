const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const fs = require('fs');
var cors = require('cors');
// validation and unit testing
const helpers = require('./includes/helpers.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../dist/chat/')));
require('./listen.js')(http);
require('./sockets.js')(app, io);
require('./routes.js')(app, path);
// image
const formidable = require('formidable');
//app.use(express.static(path.join(__dirname, '../dist/imageupload/')));
app.use('/images', express.static(path.join(__dirname, './userimages')));
require('./routes/image/upload.js')(app, formidable);


//mongoDB
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
MongoClient.connect(url, { poolSize: 10 }, function (err, client) {
  if (err) { return console.log(err) }
  const dbName = 'users';
  const db = client.db(dbName);
  //require('./routes/create.js')(app, db);
  require('./routes/read.js')(app, db);
  // users
  require('./routes/user/registerUser.js')(app, db, helpers);
  require('./routes/user/deleteUser.js')(app, db, helpers);
  require('./routes/user/readUser.js')(app, db);
  require('./routes/user/authUser.js')(app, db, helpers);
  require('./routes/user/addUserImage.js')(app, db);

  // groups
  require('./routes/group/createGroup.js')(app, db, helpers);
  require('./routes/group/deleteGroup.js')(app, db, helpers);
  require('./routes/group/readGroup.js')(app, db);
  require('./routes/group/addUserToGroup.js')(app, db, helpers);
  require('./routes/group/deleteUserFromGroup.js')(app, db, helpers);

  //channels
  require('./routes/channel/createChannel')(app, db, helpers);
  require('./routes/channel/deleteChannel')(app, db, helpers);
  require('./routes/channel/addUserToChannel.js')(app, db, helpers);
  require('./routes/channel/deleteUserFromChannel.js')(app, db, helpers);
});
