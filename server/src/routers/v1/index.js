'use strict';

var express = require('express');
var router = express.Router();

var todoRouter = require('./todo');


router.use('/todo', todoRouter);


module.exports = router;