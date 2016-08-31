'use strict';

var db = require('./db');
const passwdUtils = require('../../tools/password');

module.exports = {
    clear,
    getAll,
    create
};

function create (login, password) {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO users (login, password) VALUES ("' + login + '", "' + passwdUtils.hash(password) + '")', function (err) {
            if (err) return reject(err);
            db.get('SELECT id, login FROM users WHERE login="' + login + '"', (error, data) => {
                if (error) return reject(error);
                return resolve(data);
            })
        });
    });
}

function getAll () {
    return execSimpleQuery('SELECT id, login FROM users', 'all');
}
function clear () {
    return execSimpleQuery('DELETE FROM users');
}

// function getAllTodos () {
//     return execSimpleQuery('SELECT * FROM todos', 'all');
// }
//
// function clear () {
//     return execSimpleQuery('DELETE FROM todos');
// }
//
// function create (text) {
//     return new Promise((resolve, reject) => {
//         db.run('INSERT INTO todos (text) VALUES ("' + text + '")', function (err) {
//             if (err) return reject(err);
//             db.get('SELECT * FROM todos WHERE text="' + text + '"', (error, data) => {
//                 if (error) return reject(error);
//                 return resolve(data);
//             })
//         });
//     })
// }
// function remove(id) {
//     return new Promise((resolve, reject) => {
//         db.run('DELETE FROM todos WHERE id="' + id + '"', (err, data) => {
//             if (err) return reject(err);
//             return resolve(data);
//         })
//     })
// }

function execSimpleQuery (query, method='run') {
    return new Promise((resolve, reject) => {
        db[method](query, (err, data) => {
            if (err) return reject(err);
            return resolve(data);
        })
    })
}