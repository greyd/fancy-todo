'use strict';
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
var file = "./db/dev.db";

console.log(path.resolve(file));
var db = new sqlite3.Database(file);
module.exports = db;