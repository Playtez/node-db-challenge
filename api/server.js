const express = require("express");
const helmet = require("helmet");

const projectsRouter = require("../projects/projects-router");
const resourcesRouter = require("../resources/resource-router");
const tasksRouter = require("../tasks/tasks-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api", resourcesRouter);
server.use("/api", tasksRouter);
server.use("/api", projectsRouter);

module.exports = server;
