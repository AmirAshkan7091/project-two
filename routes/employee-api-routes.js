const { response } = require("express");
var db = require("../models");
var Employee = require("../models/employee.js");
module.exports = function (app) {
  app.get("/api/all", function (req, res) {
    db.Employee.findAll({}).then(function (results) {
      res.json(results);
      console.log(results);
    });
  });
  app.post("/api/new", function (req, res) {
    console.log("Employee Data:");
    console.log(req.body);
    db.Employee.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      title: req.body.title,
      email: req.body.email,
    }).then(function (results) {
      res.json(results);
    });
  });
};