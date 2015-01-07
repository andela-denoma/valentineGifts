var express = require('express');
var app = express();
var gift = require('./route/gift');
app.use('/gift', gift);


app.listen(3000, function(){
 console.log('How far');
});