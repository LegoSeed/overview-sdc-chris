const express = require('express');
const path = require('path');
const db = require('../mongo/database.js');

const PORT = 3003;
const app = express();

app.use(express.static(path.join(__dirname, '.', 'public')));

app.get('/legos', (req, res) => {
  // res.send('hello');
  db.getAllLegos((err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.post('/legos', (req, res) => {
  res.send('Hello from the LEGO server!');
});

app.listen(PORT);
