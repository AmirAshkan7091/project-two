const { response } = require("express");
var db = require("../models");
var Role = require("../models/role.js");
module.exports = function (app) {
  app.get("/api/all", function (req, res) {
    db.Role.findAll({}).then(function (results) {
      res.json(results);
      console.log(results);
    });
  });
  app.post("/api/newRole", function (req, res) {
    console.log("Role Data:");
    console.log(req.body);
    db.Role.create({
      title: req.body.title,
      salary: req.body.salary,
      department_name: req.body.department_name,
    }).then(function (results) {
      res.json(results);
    });
  });
};