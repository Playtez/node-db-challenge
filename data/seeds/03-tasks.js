exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          task_description: "start watering the car",
          notes: "use the hose as a resource",
          completed: false,
          project_id: 1
        },
        {
          id: 2,
          task_description: "clean the wheels",
          notes: "use brush ",
          completed: false,
          project_id: 1
        },
        {
          id: 3,
          task_description: "finish homework",
          notes: "use macbook as resource",
          completed: false,
          project_id: 3
        }
      ]);
    });
};
