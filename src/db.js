const { Pool } = require("pg");

const db = new Pool({
  user: "docker",
  host: "docker",
  database: "finances",
  host: "localhost",
  port: 5432,
});

module.exports = db;
