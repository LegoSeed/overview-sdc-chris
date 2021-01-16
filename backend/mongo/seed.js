/* mySeedScript.js */
// require the necessary libraries
const faker = require('faker');
const { MongoClient } = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// const _ = require('lodash');
// Connection URL
const url = 'mongodb://localhost:27017/test/legos';

// Database Name
const dbName = 'legos';

// Use connect method to connect to the server
MongoClient.connect(url, (err, client) => {
  assert.equal(null, err);

  const db = client.db(dbName);
  // make array of mock images
  let imageCollection = [];
  for (let i = 0; i < 10; i++) {
    imageCollection.push(faker.image.imageUrl());
  }
  // get access to the relevant collections
  const legoCollection = db.collection('legos');
  // make a bunch of items
  let legos = [];
  for (let i = 0; i < 100; i += 1) {
    let legoItem = {
      brand: faker.company.companyName(),
      name: faker.commerce.productName(),
      reviewAvg: faker.random.number({ min: 3.5, max: 5, precision: 0.01 }),
      price: faker.random.number({ min: 10, max: 89 }),
      quantity: faker.random.number(13),
      ageRec: faker.random.objectElement({ four: 4, ten: 10, thirteen: 13 }),
      pieceCount: faker.random.number({ min: 50, max: 2300 }),
      vipPoints: faker.random.number(200),
      itemNum: faker.random.number({ min: 12530, max: 25320 }),
      pictures: imageCollection,
      reviewTotal: faker.random.number(200),
    };
    legos.push(legoItem);

    // visual feedback always feels nice!
    console.log(legoItem.companyName);
  }
  legoCollection.insertMany(legos);

  console.log('Database seeded! :)');
  client.close();
});
