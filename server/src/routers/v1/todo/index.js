'use strict';

var express = require('express');
var router = express.Router();
var todo = require('../../../models/todo');

router.get('/', function (req, res) {
    todo.getAll().then(function (data) {
        res.json(data)
    })
});
router.get('/:name', function (req, res, next) {
    todo
        .create(req.params.name)
        .then(function (data) {
            res.json(data)
        })
        .catch(next)
});

module.exports = router;