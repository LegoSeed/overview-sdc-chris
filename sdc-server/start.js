/* eslint-disable no-console */
const app = require('./server.js');

const port = 3003;

app.listen(port, (err) => {
  if (err) console.log('Error connecting to server', err);
  else console.log('Connected to Server at port:', port);
});
