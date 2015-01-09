VALENTINE GIFTS APP

A valentine gift app with Express js, Node js, MongoDb and Angular js

This is an example of a create, read, update, delete web application built with Express.js v~4.0.0, and Mongoose v~3.6.13 

The full source code is available at [github.com/andela-denoma/valentineGifts](https://github.com/andela-denoma/valentineGifts).

## Before You Begin 
Before you begin we recommend you read about the basic building blocks that assemble a MEAN.JS application: 
* MongoDB - Go through [MongoDB Official Website](http://mongodb.org/) and proceed to their [Official Manual](http://docs.mongodb.org/manual/), which should help you understand NoSQL and MongoDB better.
* Express - The best way to understand express is through its [Official Website](http://expressjs.com/), which has a [Getting Started](http://expressjs.com/starter/installing.html) guide, as well as an [ExpressJS Guide](http://expressjs.com/guide/error-handling.html) guide for general express topics. You can also go through this [StackOverflow Thread](http://stackoverflow.com/questions/8144214/learning-express-for-node-js) for more resources.
* AngularJS - Angular's [Official Website](http://angularjs.org/) is a great starting point. You can also use [Thinkster Popular Guide](http://www.thinkster.io/), and the [Egghead Videos](https://egghead.io/).
* Node.js - Start by going through [Node.js Official Website](http://nodejs.org/) and this [StackOverflow Thread](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.

## Prerequisites
Make sure you have installed all these prerequisites on your development machine.
* Node.js - [Download & Install Node.js](http://www.nodejs.org/download/) and the npm package manager, if you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages, in order to install it make sure you've installed Node.js and npm, then install bower globally using npm:

## Live Example
Browse the live valentine gift app on [https://valentine-gift.herokuapp.com/users/gifts](https://valentine-gift.herokuapp.com/users/gifts).

##API
The valentine gift API is a REST API that returns format for all endpoints in JSON.

##Api Endpoints

Gift Resources

To get all gifts

GET /users/gifts

To get a single gift by ID

GET /users/gifts/:gifts_id
  
To post a gift

POST /users/gift

To edit or put a single gift

PUT /users/gifts/:gifts_id

#Creators
Enoma Deborah(enomadeborah@andela.co) and 
Gbolahan Okerayi(gbolahan.okerayi@andela.co)