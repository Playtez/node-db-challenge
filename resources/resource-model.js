const db = require("../data/dbConfig");

module.exports = {
  find,
  insert
};

function find() {
  return db("resources");
}

function insert(newProj) {
  return db("resources").insert(newProj);
}
