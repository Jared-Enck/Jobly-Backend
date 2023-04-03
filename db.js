"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");
import os from 'os'

let db;

const DB_URI = `socket:/var/run/postgresql?db=${getDatabaseUri()}`
const PRODUCTION_URI = os.environ.get('DATABASE_URL', 'postgresql:///jobly').replace('://', 'ql://', 1)

if (process.env.NODE_ENV === "production") {
  db = new Client({
    connectionString: DB_URI || PRODUCTION_URI,
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