var express = require('express');
var app = express();
var gift = require('./route/gift');

app.use('/', gift);

app.set('port', (process.env.PORT || 3000));


var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT');
  };

  app.use(allowCrossDomain);

app.listen(app.get('port'), function(){
 console.log('Server Started');
});