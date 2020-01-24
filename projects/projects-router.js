const express = require("express");

const Projects = require("./projects-model");
// const { intToBoolean } = require("../helpers/mappers");

const router = express.Router();

router.get("/projects", (req, res) => {
  Projects.find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({
        message: "can't find server",
        error: JSON.stringify(error)
      });
    });
});

router.post("/projects", (req, res) => {
  const newProject = req.body;
  Projects.insert(newProject)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({
        message: "can't find server",
        error: JSON.stringify(error)
      });
    });
});

// const completedChange = projects.map(project => {
//   return { completed: intToBoolean(project.completed), ...projects };
// });
module.exports = router;
