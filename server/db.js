// @ts-nocheck

const express = require('express');
const cors = require('cors');
const app = express();

const faker = require('faker');

var firstName = faker.name.firstName; 
var lastName = faker.name.lastName; 
var gender = faker.name.gender; 
var streetAddress = faker.address.streetAddress; 
var cityName = faker.address.cityName; 
var state = faker.address.state; 
var latitude = faker.address.latitude; 
var longitude = faker.address.longitude; 

var randomEmail = faker.internet.email; 
var totalPayment = faker.datatype.float; 
// var randomCard = faker.helpers.createCard(); 
let cutomers = [];

for (let i = 0; i < 10; i++) {
  cutomers.push({
    id: i,
    name: {
      firstName: firstName(),
      lasttName:lastName()
    },
    gender: Math.floor(Math.random() * 10) <= 4 ? 'female' : 'male',
    address:{
      streetAddress: streetAddress(),
      cityName: cityName(),
      state: state()
    },
    location: {
      latitude: latitude(),
      longitude: longitude()
    },
    randomEmail : randomEmail()
    ,
    totalPayment: totalPayment()
  })
}

app.use(cors());
app.get('/customers', function (req, res) {
  res.json({
    cutomers: cutomers
  })
})

app.get('/customer-information', function (req, res) {
  res.json({
    customer: cutomers.find(x => x.id ===  parseInt(req.query.userid))
  })
})
 
app.listen(3000)