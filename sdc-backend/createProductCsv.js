const fs = require('fs');
const { createLine } = require('./objectGenerator');

const writeProducts = fs.createWriteStream('sdc-backend/products.csv');

const generateCsv = (writer, encoding, callback) => {
  let i = 10000000;

  function write() {
    let ok = true;
    do {
      i -= 1;
      const data = createLine();
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }

  write();
};

console.time('products');
writeProducts.write('name,brand,price,reviewTotal,reviewAvg,quantity,ageRec,pieceCount,vipPoints,itemNum\n', 'utf8', () => {
  generateCsv(writeProducts, 'utf-8', () => {
    writeProducts.end();
    console.timeEnd('products');
  });
});
