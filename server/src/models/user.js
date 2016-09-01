'use strict';

const _ = require('lodash');
const db = require('./db');
const passwdUtils = require('../../tools/password');

module.exports = {
    clear,
    getAll,
    create,
    isValid,
    getById,
    getByLogin
};

function create (login, password) {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO users (login, password) VALUES (?, ?)', login, passwdUtils.hash(password), err => {
            if (err) return reject(err);
            db.get('SELECT id, login FROM users WHERE login="' + login + '"', (error, data) => {
                if (error) return reject(error);
                return resolve(data);
            })
        });
    });
}

function getAll () {
    return execQuery('SELECT id, login FROM users', 'all');
}
function clear () {
    return execQuery('DELETE FROM users');
}
function getByLogin (login) {
    return execQuery('SELECT id, login FROM users WHERE login=?', login, 'get');
}
function getById (id) {
    return execQuery('SELECT id, login FROM users WHERE id=?', id, 'get');
}
function isValid (login, password) {
    return execQuery('SELECT * FROM users WHERE login=?', login, 'get')
        .then(user => passwdUtils.validate(user.password, password) ? Promise.resolve(_.omit(user, 'password')) : Promise.reject(false));
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

function execQuery (query, method='run') {
    const args = _.toArray(arguments);

    if (args.length < 3) {
        return new Promise((resolve, reject) => {
            const cb = (err, data) => err ? reject(err) : resolve(data);
            db[method](query, cb)
        });
    }
    method = args.pop();
    return new Promise((resolve, reject) => {
        const cb = (err, data) => err ? reject(err) : resolve(data);
        db[method].apply(db, args.concat(cb));
    });

}