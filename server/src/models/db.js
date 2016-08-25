'use strict';
var sqlite3 = require('sqlite3').verbose();

var db;
if (process.env.NODE_ENV === 'test') {
    db = new sqlite3.Database('./db/test.db');
} else {
    db = new sqlite3.Database('./db/dev.db');
}
module.exports = db;