const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../mongo/database.js');

const app = express();
app.use(express.static(path.join(__dirname, '../../public')));
app.use(cors());
// app.use(express.static('/Users/jd/HackReactor/Product-Overview/public'));

app.get('/', (req, res) => {
  res.status(200).send('the GET server says "hello!"');
});

app.get('/legos', (req, res) => {
  db.getAllLegos((err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
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
