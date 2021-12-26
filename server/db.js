// @ts-nocheck

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const faker = require("faker");

var firstName = faker.name.firstName;
var lastName = faker.name.lastName;
var randomEmail = faker.internet.email;

var product = faker.commerce.product;
var price = faker.commerce.price;

// real location api
// this.http
//       .get('https://api.3geonames.org/?randomland=us&json=1')
//       .subscribe((res) => {
//         console.log(res);
//       })

// to choose real location for customers
// import address array from addresses.js
var addresses = require("./addresses");
var addressArray = addresses.addresses;

let cutomers = [];
let orders = [];
var items = [];
for (let i = 0; i < 10; i++) {
  // create orders
  let totalorderPrice = 0;
  items = [];
  for (let j = 1; j < parseInt(Math.random() * 10); j++) {
    var fakePrice = price();
    var itemOrderedQuantity = parseInt(Math.random() * 6) + 1;
    var totalItemPrice = itemOrderedQuantity * Math.floor(fakePrice);
    totalorderPrice += totalItemPrice;
    items.push({
      itemName: product(),
      itemPrice: fakePrice,
      itemOrderedQuantity: itemOrderedQuantity,
      totalItemPrice: totalItemPrice,
    });
  }
  if (items.length > 0) {
    orders.push({
      customerID: i,
      shipmentID: Math.floor(Math.random() * 500),
      items: items,
      total: totalorderPrice,
    });
  }
  // create users data with random real address
  address = addressArray[parseInt(Math.random() * 28)];
  cutomers.push({
    id: i,
    name: {
      firstName: firstName(),
      lastName: lastName(),
    },
    gender: Math.floor(Math.random() * 10) <= 4 ? "female" : "male",
    address: {
      streetAddress: address.elevation + " " + address.name,
      cityName: address.city,
      state: address.prov + " " + address.state,
    },
    location: {
      latitude: address.latt,
      longitude: address.longt,
    },
    email: randomEmail(),
    totalPayment: totalorderPrice,
  });
}

// get all customers
app.get("/customers", function (req, res) {
  res.json({
    cutomers: cutomers,
  });
});

// get customer by id
app.get("/customer-information", function (req, res) {
  res.json({
    customer: cutomers.find((x) => x.id === parseInt(req.query.id)),
  });
});

// get all orders
app.get("/orders", function (req, res) {
  res.json({
    orders: orders,
  });
});

// get orders by customer id
app.get("/customer-orders", function (req, res) {
  res.json({
    orders: orders.find((x) => x.customerID === parseInt(req.query.id)),
  });
});
app.listen(3000);
