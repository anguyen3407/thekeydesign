const express = require('express')
, bodyParser = require('body-parser')
, cors = require('cors')
// , config =  require('./config')
// , stripe = require('stripe')('sk_test_nJIKYXKLVHBFK8QmfdDak42R')
, app =  module.exports = express()
, session = require('express-session')
, massive = require('massive');

require ('dotenv').config();

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
})

app.use(bodyParser.json());
app.use(cors())


app.post('/api/payment', function(req, res, next){
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
return res.sendStatus(200);
// if (err && err.type === 'StripeCardError') {
//   // The card has been declined
// }
});
});

app.get('/api/product/1', (req, res) => 
req.app.get('db').get_product().then(product => {
  res.status(200).send(product);
}) )



app.listen(3535, () => {
console.log('Listening to port: ', 3535)});