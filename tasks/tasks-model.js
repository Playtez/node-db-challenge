const db = require("../data/dbConfig");

module.exports = {
  find,
  insert
};

function find() {
  return db
    .select(
      "tasks.id",
      "tasks.task_description",
      "tasks.notes",
      "tasks.project_id",
      "projects.project_name",
      "projects.description as project_description"
    )
    .from("tasks")
    .join("projects", "projects.id", "tasks.project_id");
}

function insert(newTask) {
  return db("tasks").insert(newTask);
}
