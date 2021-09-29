var express = require('express');
var path = require('path');
var hbs = require('express-handlebars');

var routes = require('./routes/index');

var app = express();



// view engine setup

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');