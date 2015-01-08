var express= require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/valentine');
console.log('mongoose');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('...connected');
});

// var gifts = [
//   {
//     'name': 'Bag',
//     'description': 'Gucci and Gabarna',
//     'price': 3000
//   },
//   {
//     'name': 'Shoe',
//     'description': 'All Star',
//     'price': 2000
//   }
// ];

// app.use('/api', router);

var Gift = require('../model/gifts');

router.route('/users/gifts')

.post(function(req, res){
  console.log(req.body);
  var gift = new Gift({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  });

  

  gift.save(function(err){

    if (err){
      res.send(err);
    }
    res.json(gift);
  });
})


.get(function(req, res){
  Gift.find(function(err, all_gift){

    if(err){
      res.send(err);
    }
    res.json(all_gift);
  });
});

router.route('/users/gifts/:gifts_id')

.get(function(req, res){
  Gift.findById(req.params.gifts_id, function(err, sin_gift) {

    if(err){
      res.send(err);
    }
    res.json(sin_gift);
  });
})

.put(function(req, res){
  Gift.findById(req.params.gifts_id, function(err, sin_gift) {
      sin_gift.name= req.body.name;
      sin_gift.description= req.body.description;
      sin_gift.price= req.body.price;

    sin_gift.save(function (err){
      if(err){
      res.send(err);
      }
      res.json(sin_gift);
    });
  });
})

.delete(function(req, res) {
  Gift.findById(req.params.gifts_id, function(err, sin_gift){
    sin_gift.remove(function(err) {

      if(err){
        res.send(err);
      }
      res.json('Document Deleted');
    });
  });
});


// .get(function(req, res, next) {
//   res.json(gifts);
// })


// .post(function(req, res){
//   gifts.push(req.body);

//   res.status(201).json(gifts);
// });

// router.route('/users/gifts/:name')

// .put(function (req, res) {
//   var name = req.params.name;
//    var editGifts = req.body;
//    console.log(editGifts);
//    for(i = 0; i < gifts.length; i++){
//      if(gifts[i].name === name) {
//        gifts[i].name = editGifts.name || gifts[i].name;
//        gifts[i].description = editGifts.description || gifts[i].description;
//        gifts[i].price = editGifts.price || gifts[i].price;

      
//      }
//      else {
//        res.send("No data found");
//      }
//    }
//     res.status(200).json(gifts);
//  })

// .delete(function(req, res){
//    for(i = 0; i < gifts.length; i++){
//      if(req.params.name === gifts[i].name) {
//        gifts.splice(i, 1);
       // gifts[i].name = deleteGifts.name || gifts[i].name;
       // gifts[i].description = deleteGifts.description || gifts[i].description;
       // gifts[i].price = deleteGifts.price || gifts[i].price;

      
//      }
// }

// res.json(gifts);
//  });
module.exports = router;