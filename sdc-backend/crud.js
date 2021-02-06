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
    INSERT INTO product (
      name, brand, "itemNum", price, "reviewTotal", "reviewAvg", "ageRec", "pieceCount", "vipPoints", quantity)
    VALUES(
      '${name}', '${brand}', ${itemNum}, ${price}, ${reviewTotal}, ${reviewAvg}, ${ageRec}, ${pieceCount}, ${vipPoints}, ${quantity})
    RETURNING *`)
);
