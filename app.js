var express = require('express');
var app = express();
var gift = require('./route/gift');
app.use('/api', gift);

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
 console.log('Server Started');
});