var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

require('dotenv').config();

var productRoute = require('./routes/product');
var ratesRoute = require('./routes/rates');

var app = express();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var prefix = process.env.PREFIX;
app.use(prefix, productRoute);
app.use(prefix, ratesRoute);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

try {
  app.listen(process.env.PORT | 3000);
  console.log(`server in http://localhost:${process.env.PORT | 3000}${prefix}`);
  console.log(`swagger in http://localhost:${process.env.PORT | 3000}/swagger`);
} catch (error) {
  console.log(error);
}
