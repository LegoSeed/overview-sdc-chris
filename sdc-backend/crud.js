const { client } = require('./index.js');

// get many
module.exports.findMany = () => {

};

// get by id
module.exports.findById = (id) => (
  client.query(`SELECT * FROM picture WHERE product_id = ${id}`)
    .then((pictures) => (
      client.query(`SELECT * FROM product WHERE id = ${id}`)
        .then(({ rows }) => ({
          // rows is from product result
          ...rows[0], pictures: pictures.rows.map((pic) => pic.url),
        }))
    ))
);

module.exports.postProduct = ({
  name, brand, price, reviewTotal, reviewAvg, quantity, ageRec, pieceCount, vipPoints, itemNum,
}) => {
  console.log(name, brand, price, reviewTotal, reviewAvg);
  const qString = 'INSERT INTO product (name, brand, "itemNum", price, "reviewTotal", "reviewAvg", "ageRec", "pieceCount", "vipPoints", quantity) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *';
  const params = [
    name, brand, itemNum, price, reviewTotal, reviewAvg, ageRec, pieceCount, vipPoints, quantity,
  ];
  return client.query(qString, params);
};
