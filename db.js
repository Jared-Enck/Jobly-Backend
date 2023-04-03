"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let db;

const DB_URI = `socket:/var/run/postgresql?db=${getDatabaseUri()}`

if (process.env.NODE_ENV === "production") {
  db = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  db = new Client({
    connectionString: DB_URI
  });
}

db.connect();

module.exports = db;