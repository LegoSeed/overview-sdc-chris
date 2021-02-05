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
