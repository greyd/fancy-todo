'use strict';

var db = require('./db');

module.exports = {
    getAll: getAllTodos,
    create,
    clear
};

function getAllTodos () {
    return execSimpleQuery('SELECT * FROM todos', 'all');
}

function clear () {
    return execSimpleQuery('DELETE FROM todos');
}

function create (text, parentId) {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO todos (text) VALUES ("' + text + '")', function (err) {
            if (err) return reject(err);
            db.get('SELECT * FROM todos WHERE text="' + text + '"', (error, data) => {
                if (error) return reject(error);
                return resolve(data);
            })
        });
    })
}

function execSimpleQuery (query, method='run') {
    return new Promise((resolve, reject) => {
        db[method](query, (err, data) => {
            if (err) return reject(err);
            return resolve(data);
        })
    })
}