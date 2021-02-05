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

const writePictures = fs.createWriteStream('sdc-backend/pictures.csv');

const createLine = (id) => {
  const url = randomPicGenerator(Math.floor((Math.random() * 999) + 1));
  const product_id = id;

  return (
    `${url},${product_id}\n`
  );
};

const generateCsv = (writer, encoding, callback) => {
  let i = 50000000;

  function write() {
    let ok = true;
    do {
      i -= 1;
      const data = createLine(Math.floor((Math.random() * 9999999) + 1));
      if (i === 1) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 1 && ok);
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
