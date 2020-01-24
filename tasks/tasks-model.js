const db = require("../data/dbConfig");

module.exports = {
  find
};

function find() {
  return db
    .select("*")
    .from("tasks")
    .join("projects", "projects.id", "tasks.project_id");
}
