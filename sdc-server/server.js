/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
require('newrelic');
const compression = require('compression');
const express = require('express');
const path = require('path');
const cors = require('cors');
require('../sdc-backend/index.js');
const db = require('../sdc-backend/crud.js');

const app = express();
app.use(compression());
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

// app.get('/test', (req, res) => {
// });

app.get('/legos/:id', (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(400).send({ err, message: 'Error GET-ing by Id' }));
});

app.post('/legos', (req, res) => {
  const { product } = req.body;
  console.log(product);
  db.postProduct(product)
    .then(({ rows }) => res.status(200).send(rows[0]))
    .catch((err) => res.status(400).send({ err, message: 'Error POSTING fake obj' }));
});

module.exports = app;
