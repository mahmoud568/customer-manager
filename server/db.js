// @ts-nocheck

const express = require("express");
const cors = require("cors");
const app = express();

const faker = require("faker");

var firstName = faker.name.firstName;
var lastName = faker.name.lastName;
var randomEmail = faker.internet.email;
var totalPayment = faker.datatype.float;

var product = faker.commerce.product;
var price = faker.commerce.price;

// this.http
//       .get('https://api.3geonames.org/?randomland=us&json=1')
//       .subscribe((res) => {
//         console.log(res);
//       })

// to choose real location for customers
var addressArray = [
  {
    inlatt: "33.4449",
    distance: "18.965",
    timezone: "America/Chicago",
    elevation: "979",
    region: "Lubbock County",
    name: "Lubbock",
    state: "US",
    latt: "33.57786",
    longt: "-101.85517",
    city: "Lubbock",
    prov: "Texas",
    inlongt: "-101.9833",
  },
  {
    inlatt: "36.11785",
    distance: "4.028",
    timezone: "America/Chicago",
    elevation: "79",
    region: "Pemiscot County",
    name: "Steele",
    state: "US",
    latt: "36.08396",
    longt: "-89.82925",
    city: "Steele",
    prov: "Missouri",
    inlongt: "-89.84509",
  },
  {
    inlatt: "35.6409",
    distance: "31.152",
    timezone: "America/Chicago",
    elevation: "59",
    region: "White County",
    name: "Bows Bend",
    state: "US",
    latt: "35.36675",
    longt: "-91.40985",
    city: "Bradford",
    prov: "Arkansas",
    inlongt: "-91.3389",
  },
  {
    inlatt: "39.81174",
    distance: "26.301",
    timezone: "America/New_York",
    elevation: "223",
    region: "Carroll County",
    name: "Westminster",
    state: "US",
    latt: "39.57538",
    longt: "-76.99581",
    city: "Westminster",
    prov: "Maryland",
    inlongt: "-76.98368",
  },
  {
    inlatt: "27.75892",
    distance: "8.273",
    timezone: "America/New_York",
    elevation: "19",
    region: "Pinellas County",
    name: "Lealman",
    state: "US",
    latt: "27.82114",
    longt: "-82.67927",
    city: "St. Petersburg",
    prov: "Florida",
    inlongt: "-82.63315",
  },
  {
    inlatt: "44.8806",
    distance: "16.786",
    timezone: "America/Chicago",
    elevation: "270",
    region: "Pierce County",
    name: "River Falls",
    state: "US",
    latt: "44.86136",
    longt: "-92.62381",
    city: "River Falls",
    prov: "Wisconsin",
    inlongt: "-92.8351",
  },
  {
    inlatt: "40.0232",
    distance: "18.569",
    timezone: "America/Chicago",
    elevation: "426",
    region: "Washington County",
    state: "US",
    latt: "39.85695",
    longt: "-97.3017",
    city: "Haddam",
    prov: "Kansas",
    inlongt: "-97.2811",
  },
  {
    inlatt: "36.5772",
    distance: "6.332",
    timezone: "America/Los_Angeles",
    elevation: "111",
    region: "Fresno County",
    name: "Reedley",
    state: "US",
    latt: "36.59634",
    longt: "-119.4504",
    city: "Reedley",
    prov: "California",
    inlongt: "-119.3836",
  },
  {
    inlatt: "43.72",
    distance: "14.405",
    timezone: "America/Chicago",
    elevation: "219",
    region: "Sheboygan County",
    name: "Howards Grove",
    state: "US",
    latt: "43.83388",
    longt: "-87.82009",
    city: "Howards Grove",
    prov: "Wisconsin",
    inlongt: "-87.73453",
  },
  {
    inlatt: "35.8775",
    distance: "19.675",
    timezone: "America/Phoenix",
    elevation: "780",
    region: "Coconino County",
    state: "US",
    latt: "36.04645",
    longt: "-111.9543",
    city: "Sockdolager Rapids",
    prov: "Arizona",
    inlongt: "-112.0193",
  },
  {
    inlatt: "32.45014",
    distance: "18.483",
    timezone: "America/Chicago",
    elevation: "95",
    region: "Montgomery County",
    name: "Pike Road",
    state: "US",
    latt: "32.28431",
    longt: "-86.10302",
    city: "Pike Road",
    prov: "Alabama",
    inlongt: "-86.11663",
  },
  {
    inlatt: "37.2328",
    distance: "21.876",
    timezone: "America/Denver",
    elevation: "2170",
    region: "Archuleta County",
    name: "Pagosa Springs",
    state: "US",
    latt: "37.26945",
    longt: "-107.00976",
    city: "Pagosa Springs",
    prov: "Colorado",
    inlongt: "-107.2526",
  },
];

let cutomers = [];
let orders = [];
var items = [];
for (let i = 0; i < 10; i++) {
  // create orders
  var totalItemsPrice = 0;
  items = [];
  for (let i = 1; i < parseInt(Math.random() * 6); i++) {
    var fakePrice = price();
    totalItemsPrice += Math.floor(fakePrice);
    items.push({
      itemName: product(),
      itemPrice: fakePrice,
    });
  }
  if (items.length > 0) {
    orders.push({
      customerID: i,
      shipmentID: Math.floor(Math.random() * 500),
      items: items,
      total: totalItemsPrice,
    });
  }
  // create users data with random real address
  address = addressArray[parseInt(Math.random() * 12)];
  cutomers.push({
    id: i,
    name: {
      firstName: firstName(),
      lasttName: lastName(),
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
    randomEmail: randomEmail(),
    totalPayment: totalPayment(),
  });
}

app.use(cors());
app.get("/customers", function (req, res) {
  res.json({
    cutomers: cutomers,
  });
});

app.get("/customer-information", function (req, res) {
  res.json({
    customer: cutomers.find((x) => x.id === parseInt(req.query.userid)),
  });
});
app.get("/orders", function (req, res) {
  res.json({
    orders: orders,
  });
});

app.listen(3000);
