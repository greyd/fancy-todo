'use strict';

var express = require('express');
var router = express.Router();
var todo = require('../../../models/todo');

router.get('/', function (req, res) {
    todo.getAll().then(function (data) {
        res.json(data)
    })
});

module.exports = router;