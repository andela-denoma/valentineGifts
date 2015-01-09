//BASE SETUP
//=========================================================

//call the packages we need

var express = require('express');   //call express
var app = express();                //define our app using express
var gift = require('./route/gift');


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /
app.use('/', gift);

app.set('port', (process.env.PORT || 3000)); //set our port


var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT');
  };

  app.use(allowCrossDomain);

// START THE SERVER

app.listen(app.get('port'), function(){
 console.log('Server Started');
});