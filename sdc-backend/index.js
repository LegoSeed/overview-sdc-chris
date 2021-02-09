/* eslint-disable no-console */
const { Client } = require('pg');

// const connectionString = 'postgres://altchris:password@localhost:5432/sdc-legos';
const connectionString = 'postgres://altchris:password@ec2-3-137-159-93.us-east-2.compute.amazonaws.com:5432/sdc-legos';
const client = new Client({ connectionString });

// const connectionString = 'postgres://altchris:password@localhost:5432/sdc-lego';

client.connect()
  .then(() => console.log('Connected to PostgreSQL Legos!'))
  .catch((err) => console.log('Error connecting to PostgrSQL Legos', err));

module.exports.client = client;
