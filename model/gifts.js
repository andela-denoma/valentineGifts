var mongoose = require('mongoose');

app.set('port', (process.env.PORT || 3000))
mongoose.connect('mongodb://gokerayi:pastor01@ds031561.mongolab.com:31561/valentine');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('...connected')
});

var Schema = mongoose.Schema;

var GiftSchema = new Schema({
	name: {
    type: String,
    required: true,
    trim: true
  },

  description: {
    type: String,
    required: true,
    trim: true
  },

  price: {
    type: Number,
    required: true,
    trim: true
  }

}); 
app.listen(app.get('port'), function() {
  console.log("Node is working)

module.exports = mongoose.model('Gift', GiftSchema);