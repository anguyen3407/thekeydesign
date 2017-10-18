require('dotenv').config();

const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  stripe = require('stripe')(process.env.STRIPE_SECRETKEY),
  app = module.exports = express(),
  session = require('express-session'),
  massive = require('massive'),
  ctrl = require('../src/controller/productController'),
  nodemailer = require('nodemailer'), 
  passport = require('passport'), 
  Auth0Strategy = require('passport-auth0');




massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
})

app.use(bodyParser.json());
app.use(cors())


//auth0

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}))
app.use(cors());
app.use(bodyParser.json())
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING)
.then( db => {
  app.set('db', db)
})

passport.use( new Auth0Strategy({
  domain: process.env.AUTH_DOMAIN,
  clientID: process.env.AUTH_CLIENT_ID,
  clientSecret: process.env.AUTH_CLIENT_SECRET,
  callbackURL: process.env.AUTH_CALLBACK
}, function(accessToken, refreshToken, extraParams, profile, done) {
  const db = app.get('db');
      db.get_user([profile.identities[0].user_id]).then( user => {
          if (user[0]) {
              done(null, user[0].id)
          } else {
              db.create_user([
                  profile.emails[0].value,
                  profile.identities[0].user_id]).then( user => {
                      done(null, user[0].id)
                  })
          }})
    }))

   passport.serializeUser(function(userId, done) {
      done(null, userId);
  })
    passport.deserializeUser( function( userId, done) {
      app.get('db').current_user(userId).then(user => {
              done(null, user[0])
  })
  })
  app.get('/auth', passport.authenticate('auth0'));
  app.get('/auth/callback', passport.authenticate('auth0',{
      successRedirect: `${process.env.SERVERHOST}/#/admin`,
      failureRedirect: '/auth'
  }))

  app.get('/auth/logout', (req,res) => {
      req.logOut();
      res.redirect(302, `https:${process.env.AUTH_DOMAIN}/v2/logout?returnTo=${process.ENV.SERVERHOST}`)
  })

  app.get('/api/user',  passport.authenticate('auth0'), (req, res) => {
      req.app.get('db').current_user().then(user =>{
          res.status(200).send(user)
      }).catch((err) => {console.log(err)})
  })

//auth0 end


app.post('/api/sendEmail', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: 'a.nguyen8778@yahoo.com',
      pass: process.env.EMAIL_PASSWORD
    }
  })
  const {user_email, email, message} = req.body;
  var mailOptions = {
    from: req.body.email,
    to: 'a.nguyen8778@yahoo.com',
    subject: req.body.email,
    text: "you have a submission with the following details ... From: " +req.body.user_email+ "To:" +req.body.email+ "Message:" +req.body.message,
    html: '<ul ><li>From: '+req.body.user_email+'</li><li>To: '+req.body.email+'</li><li>Message: <p>'+req.body.message+'</p></li></ul>'
  };
  console.log(mailOptions)
  transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log('message sent!')
    }
  });
})

app.post('/api/payment', function (req, res, next) {
  console.log('yup this is it', req.body)


  //convert amount to pennies
  const amountArray = req.body.amount.toString().split('');
  const pennies = [];
  for (var i = 0; i < amountArray.length; i++) {
    if (amountArray[i] === ".") {
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
    description: 'Test Charge'
  }, function (err, charge) {
    if (err) return res.sendStatus(500)

    const dbInstance = req.app.get('db');
    const {
      firstName,
      lastName,
      email_address,
      billing_address,
      phone_number, 
      standard,
      twilight,
      drone,
      house,
      total,
      city,
      state,
      zip,
      street_address
    } = req.body.options;
    // console.log(      
    //   firstName,
    //   lastName,
    //   email_address,
    //   billing_address,
    //   phone_number, 
    //   standard, 
    //   twilight, 
    //   drone, 
    //   house, 
    //   total, 
    //   city, 
    //   state, 
    //   zip, 
    //   street_address);
    dbInstance.add_order([      
      firstName,
      lastName,
      email_address,
      billing_address,
      phone_number,
      true, 
      standard, 
      twilight, 
      drone, 
      house, 
      city, 
      state, 
      zip, 
      street_address])
      .then(() => res.status(200).send())
      .catch((err) => {

        console.log('asdfghj',err)
      })



    // return res.sendStatus(200);
    // if (err && err.type === 'StripeCardError') {
    //   // The card has been declined
    // }
  });
}

);

// admin page

app.get('/api/admin', (req, res) => {
  const invoice = app.get('db')
  req.app.get('db').get_invoice([req.body.options]).then(invoices=> {
    console.log(invoices)
    res.status(200).send(invoices);
  }).catch((err) => (console.log(err)))
})

// admin page close

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
  console.log('Listening to port: ', 3535)
});