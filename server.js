const express = require('express');
const path = require('path');

const PORT = 3003;
const app = express();

app.use(express.static(path.join(__dirname, '.', 'public')));

app.get('/', (req, res) => {
  res.send('Hello from the LEGO server!');
});
app.post('/legos', (req, res) => {
  res.send('Hello from the LEGO server!');
});
app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});
