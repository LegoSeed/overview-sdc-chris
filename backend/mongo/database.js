/* eslint-disable no-console */
/* eslint-disable array-callback-return */
const mongoose = require('mongoose');
// const { array } = require('prop-types');
// const db = require('./index.js');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://database:27017/legos', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb://localhost:27017/legos', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);

const { connection } = mongoose;
// const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
  console.log('connection open!');
});

const legoSchema = new mongoose.Schema({
  brand: String,
  name: String,
  reviewAvg: Number,
  price: Number,
  quantity: Number,
  ageRec: Number,
  pieceCount: Number,
  vipPoints: { type: Number, default: 0 },
  itemNum: Number,
  pictures: Array,
  reviewTotal: Number,
});

const LegoList = mongoose.model('legos', legoSchema);

const getAllLegos = (callback) => {
  LegoList.find((err, legos) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, legos);
    }
  });
};

const getDucatiLego = (callback) => {
  const query = LegoList.where({ name: 'Ducati Panigale V4 R' });
  query.findOne((err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  getAllLegos,
  getDucatiLego,
  LegoList,
};
