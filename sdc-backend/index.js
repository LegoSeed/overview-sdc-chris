/* eslint-disable no-console */
const { Client, Pool } = require('pg');

// const connectionString = 'postgres://altchris:password@localhost:5432/sdc-legos';
const connectionString = 'postgres://altchris:password@ec2-3-137-159-93.us-east-2.compute.amazonaws.com:5432/sdc-legos';
// const client = new Pool({ connectionString });
const client = new Pool({
  host: 'ec2-3-137-159-93.us-east-2.compute.amazonaws.com',
  port: 5432,
  database: 'sdc-legos',
  user: 'altchris',
  password: 'password',
  max: 20,
  idleTimeoutMillis: 0,
  connectionTimeoutMillis: 0,
});

// const connectionString = 'postgres://altchris:password@localhost:5432/sdc-lego';
client.on('error', (e) => {
  console.error('Database error', e);
  // client = null;
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL Legos!'))
  .catch((err) => console.log('Error connecting to PostgrSQL Legos', err));

module.exports.client = client;
