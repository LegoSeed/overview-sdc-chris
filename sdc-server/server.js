const compression = require('compression');
const express = require('express');
const path = require('path');
const cors = require('cors');
require('../sdc-backend/index.js');
const db = require('../sdc-backend/crud.js');

const app = express();
app.use(compression());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(cors());

// app.use(express.static('/Users/jd/HackReactor/Product-Overview/public'));
app.get('/test', (req, res) => {
  db.findById(9900002)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(400).send({ err, message: 'Error GET-ing by Id' }));
});

app.get('/', (req, res) => {
  res.sendStatus(200);
  // (status(200).send('the GET server says "hello!"');
});

app.get('/legos', (req, res) => {
  db.getAllLegos((err, results) => {
    if (err) {
      // console.log(err);
      res.status(404).send(err);
    } else {
      // console.log(results);
      res.status(200).send(results);
    }
  });
});

app.get('/legos/ducati', (req, res) => {
  db.getDucatiLego((err, result) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.post('/legos', (req, res) => {
  res.send('Hello from the LEGO server!');
});

module.exports = app;
