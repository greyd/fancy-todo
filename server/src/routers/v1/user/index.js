'use strict';

var express = require('express');
var router = express.Router();
var user = require('../../../models/user');

router.get('/', (req, res, next) =>
    user.getAll()
        .then(sendJSON(res), next));

router.post('/', (req, res, next) =>
    user.create(req.body.login, req.body.password)
        .then(created(res), next));

router.delete('/', (req, res, next) =>
    user.clear()
        .then(noData(res), next));

router.get('/name/:name', (req, res, next) =>
    user.getByLogin(req.params.name)
        .then(sendJSON(res), next));

// router.delete('/:id', (req, res, next) =>
//     todo.remove(req.params.id)
//         .then(noData(res), next));

function noData(res) {
    return () => res.status(204).end();
}
function created(res) {
    return (data) => res.status(201).json(data);
}
function sendJSON(res) {
    return data => res.json(data);
}

module.exports = router;
