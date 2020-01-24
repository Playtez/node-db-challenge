exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { id: 2, resource_name: "water hose", description: "wets the car" },
        {
          id: 3,
          resource_name: "Macbook pro #1",
          description: "can leave empty"
        },
        {
          id: 1,
          resource_name: "Lambda Student",
          description: "can leave empty"
        },
        {
          id: 4,
          resource_name: "brush",
          description: "clean other tasks, simply a tool"
        }
      ]);
    });
};
