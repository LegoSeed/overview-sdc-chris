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
// MUST INCLUDE QUOTES TO PRESERVE CAMELCASE IN COLUMNS,
// MUST USE QUOTES AROUND STRING VALUES YOU WANT TO INSERT
module.exports.postProduct = ({
  name, brand, price, reviewTotal, reviewAvg, quantity, ageRec, pieceCount, vipPoints, itemNum,
}) => (
  client.query(`
  WITH inserted_product AS(
    INSERT INTO product (
      name, brand, "itemNum", price, "reviewTotal", "reviewAvg", "ageRec", "pieceCount", "vipPoints", quantity)
    VALUES(
      '${name}', '${brand}', ${itemNum}, ${price}, ${reviewTotal}, ${reviewAvg}, ${ageRec}, ${pieceCount}, ${vipPoints}, ${quantity})
    RETURNING *
    )
    INSERT INTO picture(product_id, url) VALUES(
      (SELECT id FROM inserted_product),
      'http://sdc-legos.s3.amazonaws.com/images/toy_0${Math.floor((Math.random() * 999) + 1).toString().padStart(4, '0')}.jpg'
    )
    RETURNING product_id
  `).then(({ rows }) => client.query(`SELECT * FROM product WHERE id = ${rows[0].product_id}`))
);

// module.exports.postProduct = ({
//   name, brand, price, reviewTotal, reviewAvg, quantity, ageRec, pieceCount, vipPoints, itemNum,
// }) => (
//   client.query(`
//     INSERT INTO product (
//       name, brand, "itemNum", price, "reviewTotal", "reviewAvg", "ageRec", "pieceCount", "vipPoints", quantity)
//     VALUES(
//       '${name}', '${brand}', ${itemNum}, ${price}, ${reviewTotal}, ${reviewAvg}, ${ageRec}, ${pieceCount}, ${vipPoints}, ${quantity})
//     RETURNING *
//   `)
// );
