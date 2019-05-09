const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { User, Address, Payment } = require('./sequelize.js')
var cors = require('cors');

var port = 3000
var app = express();
app.use(express.static('./public'))
app.use(bodyParser.json())
app.use(cors());



app.post('/account', function (req, res) {
  console.log('hhhhh')
    User.create(req.body)
    .then(function (err, result) {
      if (err) {
        console.log(err)
      } else {
        console.log('success')
      }
    })
});
app.post('/address', function (req, res) {
  console.log('hhhhh')
  Address.create(req.body)
    .then(function (err, result) {
      if (err) {
        console.log(err)
      } else {
        console.log('success')
      }
    })
});
app.post('/payment', function (req, res) {
  console.log('hhhhh')
  Payment.create(req.body)
    .then(function (err, result) {
      if (err) {
        console.log(err)
      } else {
        console.log('success')
      }
    })
});


app.listen(port, () => {
  console.log(`Port ${port}: success`);
})