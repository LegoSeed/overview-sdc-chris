/* eslint-disable max-classes-per-file */
const faker = require('faker/locale/en_US');
const ObjectsToCSV = require('objects-to-csv');

const randomPicGenerator = (num) => {
  let stringNumber = num.toString();
  stringNumber = stringNumber.padStart(4, '0');
  const url = `http://sdc-legos.s3.amazonaws.com/images/toy_0${stringNumber}.jpg`
  return url;
};

// 10 million Lego Records
class LegoData {
  constructor() {
    this.brand = faker.company.companyName();
    this.name = faker.commerce.productName();
    this.reviewAvg = faker.random.number({ min: 3.5, max: 5, precision: 0.01 });
    this.price = faker.random.number({ min: 10, max: 89 });
    this.quantity = faker.random.number(13);
    this.ageRec = faker.random.objectElement({ four: 4, ten: 10, thirteen: 13 });
    this.pieceCount = faker.random.number({ min: 50, max: 2300 });
    this.vipPoints = faker.random.number(200);
    this.itemNum = faker.random.number({ min: 12530, max: 25320 });
    this.reviewTotal = faker.random.number(200);
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

// for (let i = 0; i < 1000; i += 1) {
//   products.push(new LegoData());
// }

for (let i = 0; i < 1000; i += 1) {
  pictures.push(new Picture(i < 50 ? i : Math.floor(Math.random() * 1000)));
}
console.log(pictures);