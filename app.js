var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var router = express.Router();


var gifts = [
  {
    'name': 'Bag',
    'description': 'Gucci and Gabarna',
    'price': 3000
  },
  {
    'name': 'Shoe',
    'description': 'All Star',
    'price': 2000
  }
];

app.use('/api', router);

router.route('/users/gifts')

.get(function(req, res, next) {
  res.json(gifts);
})


.post(function(req, res){
  gifts.push(req.body);

  res.status(201).json(gifts);
});

router.route('/users/gifts/:name')

.put(function (req, res) {
  var name = req.params.name;
   var editGifts = req.body;
   console.log(editGifts);
   for(i = 0; i < gifts.length; i++){
     if(gifts[i].name === name) {
       gifts[i].name = editGifts.name || gifts[i].name;
       gifts[i].description = editGifts.description || gifts[i].description;
       gifts[i].price = editGifts.price || gifts[i].price;

      
     }
     else {
       res.send("No data found");
     }
   }
    res.status(200).json(gifts);
 })

.delete(function(req, res){
   for(i = 0; i < gifts.length; i++){
     if(req.params.name === gifts[i].name) {
       gifts.splice(i, 1);
       // gifts[i].name = deleteGifts.name || gifts[i].name;
       // gifts[i].description = deleteGifts.description || gifts[i].description;
       // gifts[i].price = deleteGifts.price || gifts[i].price;

      
     }
}

res.json(gifts);
 });

app.listen(3000, function(){
  console.log('How far');
});
  