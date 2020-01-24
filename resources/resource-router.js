const express = require("express");

const Resources = require("./resource-model");

const router = express.Router();

router.get("/resources", (req, res) => {
  Resources.find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({
        message: "can't find server"
      });
    });
});

router.post("/resources", (req, res) => {
  const newResources = req.body;
  Resources.insert(newResources)
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      res.status(500).json({
        message: "can't find server",
        error: JSON.stringify(error)
      });
    });
});

module.exports = router;
