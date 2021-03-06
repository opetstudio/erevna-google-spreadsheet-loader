const _logger    = require('tracer').console();
const _config = require('./config');
const mongoose   = require('mongoose');
var model_user = require('./models/Users');

//via docker
// var uri = "mongodb://mongo/dummy-app";

// var promise = mongoose.connect('mongodb://'+_config.database.mongodb.host+':'+_config.database.mongodb.port+'/' + _config.database.mongodb.database, {
var promise = mongoose.connect(_config.database.mongodb.uri, {
  useMongoClient: true,
  /* other options */
});

promise.then(function(db) {
    console.log("success mongoose connection");
    model_user.init();
    //module.exports = db;
    /* Use `db`, for instance `db.model()`
    });
    // Or, if you already have a connection
    connection.openUri('mongodb://localhost/myapp', { /* options */
},
function(error){
    console.log("error mongoose connection: ",error);
});
