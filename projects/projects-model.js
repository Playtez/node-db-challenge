const db = require("../data/dbConfig");

module.exports = {
  find,
  insert
};

function find() {
  return db("projects");
}

function insert(newProj) {
  return db("projects").insert(newProj);
}
