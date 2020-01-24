exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          project_name: "Clean Car",
          description: " wash the vehicle along with alot of other tasks",
          completed: false
        },
        {
          id: 2,
          project_name: "Clean the gutters",
          description: "hello clean the gutters",
          completed: false
        },
        {
          id: 3,
          project_name: "Homework",
          description: "Lambda classes homework",
          completed: false
        }
      ]);
    });
};
