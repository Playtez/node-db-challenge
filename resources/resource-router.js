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

module.exports = router;
