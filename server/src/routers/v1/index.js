'use strict';

var express = require('express');
var router = express.Router();

var todoRouter = require('./todo');
var userRouter = require('./user');


router.use('/todo', todoRouter);
router.use('/user', userRouter);


module.exports = router;