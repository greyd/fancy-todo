'use strict';

var db = require('./db');

function getAllTodos () {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM todos', function (err, data) {
            if (err) return reject(err);
            return resolve(data);
        });
    })

}

module.exports = {
    getAll: getAllTodos
};