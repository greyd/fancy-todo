'use strict';

var express = require('express');
var router = express.Router();
var todo = require('../../../models/todo');

router.get('/', (req, res, next) =>
    todo.getAll()
        .then(sendJSON(res), next));

router.post('/', (req, res, next) =>
    todo.create(req.body.text)
        .then(created(res), next));

router.delete('/', (req, res, next) =>
    todo.clear()
        .then(noData(res), next));

router.delete('/:id', (req, res, next) =>
    todo.remove(req.params.id)
        .then(noData(res), next));

function noData(res) {
    return () => res.status(204).end();
}
function created(res) {
    return () => res.status(201).end();
}
function sendJSON(res) {
    return data => res.json(data);
}

module.exports = router;