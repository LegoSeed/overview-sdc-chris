const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose');
// const { array } = require('prop-types');
// const db = require('./index.js');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/legos', { useNewUrlParser: true, useUnifiedTopology: true });
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
  reviewAvg: Decimal128,
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

module.exports = {
  getAllLegos,
};
