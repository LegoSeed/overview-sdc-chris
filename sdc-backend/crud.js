const { client } = require('./index.js');

// get many
module.exports.findMany = () => {

};

// get by id
module.exports.findById = (id) => (
  client.query(`SELECT * FROM picture WHERE product_id = ${id}`)
    .then((pictures) => (
      client.query(`SELECT * FROM product WHERE id = ${id}`)
        .then((product) => ({
          ...product.rows[0], pictures: pictures.rows,
        }))
    ))
);
