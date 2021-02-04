/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
const faker = require('faker/locale/en_US');
const ObjectsToCsv = require('objects-to-csv');

const randomPicGenerator = (num) => {
  let stringNumber = num.toString();
  stringNumber = stringNumber.padStart(4, '0');
  const url = `http://sdc-legos.s3.amazonaws.com/images/toy_0${stringNumber}.jpg`;
  return url;
};

// 10 million Lego Records
class LegoData {
  constructor() {
    this.name = faker.commerce.productName();
    this.brand = faker.company.companyName();
    this.price = faker.random.number({ min: 10, max: 89 });
    this.reviewTotal = faker.random.number(200);
    this.reviewAvg = faker.random.number({ min: 3.5, max: 5, precision: 0.01 });
    this.quantity = faker.random.number(13);
    this.ageRec = faker.random.objectElement({ four: 4, ten: 10, thirteen: 13 });
    this.pieceCount = faker.random.number({ min: 50, max: 2300 });
    this.vipPoints = faker.random.number(200);
    this.itemNum = faker.random.number({ min: 12530, max: 25320 });
  }
}
// 50 million picture Records
// spread these out randomly amongst 10 million records
class Picture {
  constructor(id) {
    this.url = randomPicGenerator(Math.floor(Math.random() * 1000));
    // this.product_id = Math.floor(Math.random() * 10000000);
    this.product_id = id;
  }
}
const products = [];
const pictures = [];

for (let i = 0; i < 1000; i += 1) {
  products.push(new LegoData());
}

for (let i = 1; i < 1001; i += 1) {
  pictures.push(new Picture(i));
}

// (async () => {
//   const csv = new ObjectsToCsv(products);
//   await csv.toDisk('./test.csv');
// })();

const productsCsv = new ObjectsToCsv(products);
const picturesCsv = new ObjectsToCsv(pictures);
productsCsv.toDisk('./sdc-backend/products.csv')
  .then(() => {
    console.log('products finished csv-ing');
    return picturesCsv.toDisk('./sdc-backend/pictures.csv');
  }).then(() => console.log('pictures finished csv-ing'));

// for (let i = 0; i < 1000; i += 1) {
//   pictures.push(new Picture(i < 50 ? i : Math.floor(Math.random() * 1000)));
// }
