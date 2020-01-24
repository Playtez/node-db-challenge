const db = require("../data/dbConfig");

module.exports = {
  find,
  findById
};

function find() {
  return db("resources");
}

function findById(id) {
  return;
}
