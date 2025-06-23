const db = require("../config/db");

const getAll = () => db("tasks");
const getById = (id) => db("tasks").where({ id }).first();
const create = (task) => db("tasks").insert(task).returning("*");
const update = (id, task) =>
  db("tasks").where({ id }).update(task).returning("*");
const remove = (id) => db("tasks").where({ id }).del();

module.exports = { getAll, getById, create, update, remove };
