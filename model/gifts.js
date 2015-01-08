var mongoose = require('mongoose');

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

module.exports = mongoose.model('Gift', GiftSchema);