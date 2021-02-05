const { client } = require('./index.js');

// get many
module.exports.findMany = () => {

};

// get by id
module.exports.findById = (id) => (
  client.query(`SELECT * FROM product WHERE id = ${id}`)
    .then((result) => result.rows)
    .catch((err) => err)
);
