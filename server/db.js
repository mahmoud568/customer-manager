// @ts-nocheck

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

let customers = [];
let orders = [];
var items = [];
for (let i = 0; i < 10; i++) {
  let customerFirstName = firstName();
  let customeLastName = lastName();
  // create orders
  let totalorderPrice = 0;
  items = [];
  for (let j = 1; j < parseInt(Math.random() * 10); j++) {
    // data that i would use more than once so i would randmize it here so i can app data make sense

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
      cutomerFullName: `${customerFirstName} ${customeLastName}`,
      shipmentID: Math.floor(Math.random() * 500),
      items: items,
      total: totalorderPrice,
    });
  }
  // create users data with random real address
  address = addressArray[parseInt(Math.random() * 28)];
  customers.push({
    id: i,
    name: {
      firstName: customerFirstName,
      lastName: customeLastName,
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
    customers: customers,
  });
});

// get customer by id
app.get("/customer-information", function (req, res) {
  res.json({
    customer: customers.find((x) => x.id === parseInt(req.query.id)),
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
  if (orders.find((x) => x.customerID === parseInt(req.query.id))) {
    res.json({
      orders: orders.find((x) => x.customerID === parseInt(req.query.id)),
      status: "success",
      details: "customer orders has been found",
    });
  } else {
    res.json({
      status: "erorr",
      details: "customer orders has been not found",
    });
  }
});

// edit customer by id
app.post("/edit-customer", function (req, res) {
  var id = parseInt(req.query.id);
  var editedCustomer = JSON.parse(req.body.customer);
  // loop in customers array untel we find the matches customer then change it value by sended body
  for (let i = 0; i < customers.length; i++) {
    if (customers[i].id === id) {
      customers[i] = editedCustomer;
      return res.json({
        status: "success",
        details: "customer has been deleted succefully",
      });
    }
  }
  return res.json({
    status: "error",
    details: "didn't find this customer",
  });
});

app.delete("/delete-customer", function (req, res) {
  var id = parseInt(req.query.id);
  // loop in customers array untel we find the matches customer then change it value by sended body
  for (let i = 0; i < customers.length; i++) {
    if (customers[i].id === id) {
      customers.splice([i], 1);
      return res.json({
        status: "success",
        details: "customer has been updated succefully",
      });
    }
  }
  return res.json({
    status: "error",
    details: "didn't find this customer",
  });
});

// edit customer by id
app.post("/add-customer", function (req, res) {
  var newCustomer = JSON.parse(req.body.customer);
  newCustomer.id = customers.length;
  customers.push(newCustomer);
  res.json({
    status: "success",
    newCustomer: newCustomer,
  });
});

// login
var adminArray = [
  {
    id: 0,
    userName: "admin",
    password: "12345",
    adminName: "mahmoud",
    auth: {
      readData: true,
      edit: true,
      delete: true,
      add: true,
    },
  },
];
app.post("/login", function (req, res) {
  userName = JSON.parse(req.body.userName);
  password = JSON.parse(req.body.password);
  let admin = adminArray[0];
  if (admin.userName === userName && admin.password === password) {
    res.json({
      status: "success",
      admin: admin,
    });
  } else {
    res.json({
      status: "error",
    });
  }
});

app.listen(3000);
