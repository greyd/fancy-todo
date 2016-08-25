'use strict';

var db = require('./db');

module.exports = {
    getAll: getAllTodos,
    create: create
};

function getAllTodos () {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM todos', function (err, data) {
            if (err) return reject(err);
            return resolve(data);
        });
    })
}

function create (name, parentId) {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO todos (name) VALUES ("' + name + '")', function (err) {
            if (err) return reject(err);
            db.get('SELECT * FROM todos WHERE name="' + name + '"', (error, data) => {
                if (error) return reject(error);
                return resolve(data);
            })
        });
    })
}