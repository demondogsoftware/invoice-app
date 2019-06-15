"use strict";

const Promise = require("bluebird");
const sqlite3 = require("sqlite3");
const path = require('path');

module.exports = {
  up: function() {
    return new Promise(function(resolve, reject) {
      let db = new sqlite3.Database('./database/InvoiceApp.db')
      db.run(`PRAGMA foreign_keys = ON`);

      db.serialize(function() {
        db.run(`CREATE TABLE users (
          id INTEGER PRIMARY KEY,
          name TEXT,
          email TEXT,
          company_name TEXT,
          password TEXT
        )`);

        db.run(`CREATE TABLE invoices (
          id INTEGER PRIMARY KEY,
          name TEXT,
          user_id INTEGER,
          paid NUMBERIC,
          FOREIGN KEY(user_id) REFERENCES users(id)
        )`);

        db.run(`CREATE TABLE transactions (
          id INTEGER PRIMARY KEY,
          name TEXT,
          price INTEGER,
          invoice_id INTEGER,
          FOREIGN KEY(invoice_id) REFERENCES invoices(id)
        )`);
      });
      db.close();
    });
  },
  
}
