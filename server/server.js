require ('dotenv').config();

const express = require('express')
, bodyParser = require('body-parser')
, cors = require('cors')
, stripe = require('stripe')('sk_test_nJIKYXKLVHBFK8QmfdDak42R')
, app =  module.exports = express()
, session = require('express-session')
, massive = require('massive')
, ctrl = require('../src/controller/productController');



massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
})

app.use(bodyParser.json());
app.use(cors())


app.post('/api/payment', function(req, res, next){
  console.log('yup this is it', req.body)
//convert amount to pennies
const amountArray = req.body.amount.toString().split('');
const pennies = [];
for (var i = 0; i < amountArray.length; i++) {
if(amountArray[i] === ".") {
  if (typeof amountArray[i + 1] === "string") {
    pennies.push(amountArray[i + 1]);
  } else {
    pennies.push("0");
  }
  if (typeof amountArray[i + 2] === "string") {
    pennies.push(amountArray[i + 2]);
  } else {
    pennies.push("0");
  }
    break;
} else {
    pennies.push(amountArray[i])
}
}
const convertedAmt = parseInt(pennies.join(''));

const charge = stripe.charges.create({
amount: convertedAmt, // amount in cents, again
currency: 'usd',
source: req.body.token.id,
description: 'Test charge from react app'
}, function(err, charge) {
if (err) return res.sendStatus(500)

const dbInstance = req.app.get('db');
const {standard, twilight, drone, house, total, city, state, zip, street_address}= req.body.options;
console.log(standard, twilight, drone, house, total, city, state, zip, street_address);
dbInstance.add_order([true, standard, twilight, drone, house, city, state, zip, street_address])
.then(() => res.status(200).send())



// return res.sendStatus(200);
// if (err && err.type === 'StripeCardError') {
//   // The card has been declined
// }
});
});

//title
// app.get('/api/product/basic', ctrl.getProductBasic);
// app.get('/api/product/drone', ctrl.getProductDrone);
// app.get('/api/product/houseCleaning', ctrl.getProductHouseCleaning);
// app.get('/api/product/standard', ctrl.getProductStandard);
// app.get('/api/product/twilight', ctrl.getProductTwilight);


// //cart
// app.post('/api/product/cart', ctrl.addProducts);


//NEWCART
app.post('/api/product/scheduleOrder', ctrl.scheduleOrder);

app.listen(3535, () => {
console.log('Listening to port: ', 3535)});