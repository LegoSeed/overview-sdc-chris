const mongoose = require('mongoose');
// const { array } = require('prop-types');
// const db = require('./index.js');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
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
});

const LegoList = mongoose.model('legos', legoSchema);

// const Legos = new LegoList({
// brand: 'TechNic',
// name: 'Ducati Panigale V4 R',
// reviewAvg: 51,
// price: 69.99,
// quantity: 0,
// ageRec: 10,
// pieceCount: 646,
// vipPoints: 0,
// itemNum: 42107});
// Legos.save().then(() => console.log('LEGGO my EGGO'));

// const createItem = ((item, callback) => {

// })

// module.exports = {

// }
