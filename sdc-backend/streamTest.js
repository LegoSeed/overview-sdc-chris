const fs = require('fs');
const faker = require('faker');

const createLine = () => {
  const name = faker.commerce.productName();
  const brand = faker.company.companyName(0);
  const price = faker.random.number({ min: 10, max: 89 });
  const reviewTotal = faker.random.number(200);
  const reviewAvg = faker.random.number({ min: 3.5, max: 5, precision: 0.01 });
  const quantity = faker.random.number(13);
  const ageRec = faker.random.objectElement({ four: 4, ten: 10, thirteen: 13 });
  const pieceCount = faker.random.number({ min: 50, max: 2300 });
  const vipPoints = faker.random.number(200);
  const itemNum = faker.random.number({ min: 12530, max: 25320 });

  return (
    `${name},${brand},${price},${reviewTotal},${reviewAvg},${quantity},${ageRec},${pieceCount},${vipPoints},${itemNum}\n`
  );
};

const file = fs.createWriteStream('sdc-backend/test.csv');

file.write('name,brand,price,reviewTotal,reviewAvg,quantity,ageRec,pieceCount,vipPoints,itemNum\n');

for (let i = 0; i <= 1000000; i += 1) {
  file.write(createLine());
}

file.end();
