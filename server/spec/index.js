'use strict';

var app = require('../src/app');
var request = require('supertest');
var application = request(app);

describe('ToDo App', function () {
    it('should respond with "pong" on ping', function (done) {
        application
            .get('/ping')
            //.expect('Content-Type', /text/)
            .expect('Content-Length', '4')
            .expect(200, done);
    });
});


