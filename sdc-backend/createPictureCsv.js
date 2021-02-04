/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
const fs = require('fs');

const randomPicGenerator = (num) => {
  let stringNumber = num.toString();
  stringNumber = stringNumber.padStart(4, '0');
  const url = `http://sdc-legos.s3.amazonaws.com/images/toy_0${stringNumber}.jpg`;
  return url;
};
// 50 million picture Records
// spread these out randomly amongst 10 million records
class Picture {
  constructor(id) {
    this.url = randomPicGenerator(Math.floor(Math.random() * 1000));
    // this.product_id = Math.floor(Math.random() * 10000000);
    this.product_id = id;
  }
}

const writePictures = fs.createWriteStream('pictures.csv');

const createLine = (id) => {
  const url = randomPicGenerator(Math.floor(Math.random() * 1000));
  const product_id = id;

  return (
    `${url},${product_id}\n`
  );
};

const generateCsv = (writer, encoding, callback) => {
  let i = 10000;

  function write() {
    let ok = true;
    do {
      i -= 1;
      const data = createLine(i > 5000 ? Math.floor(Math.random() * 10000000) : i);
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
console.time('pictures');
writePictures.write('url,product_id\n', 'utf8', () => {
  generateCsv(writePictures, 'utf-8', () => {
    writePictures.end();
    console.timeEnd('pictures');
  });
});
