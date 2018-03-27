// =============================
//      DEPENDENCIES
// =============================

// var logger = require("morgan");
var express = require('express');
var mongojs = require('mongojs');
var request = require('request');
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

// Initialiaze express...
var app = express();

// Require all models
var db = require('./models');
var PORT = process.env.PORT || 3000;

// ===============================
// Configure middleware and DB connection
// ===============================

// using body parser for handling submissions...
app.use(bodyParser.urlencoded({ extended: true }));

// static directory...
app.use(express.static("./public"));

// // use morgan logger to log requests
// app.use(logger("dev"));

mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/joByte", {});

// load ROUTES
require('./routes/routes.js')(app);

app.listen(PORT, function() {
    console.log('App running on port', PORT)
});
