const express = require("express");

const Tasks = require("./tasks-model");

const router = express.Router();

router.get("/tasks", (req, res) => {
  Tasks.find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({
        message: "can't find server"
      });
    });
});

router.post("/tasks", (req, res) => {
  const newTask = req.body;
  Tasks.insert(newTask)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(error => {
      res.status(500).json({
        message: "can't find server"
      });
    });
});
module.exports = router;
