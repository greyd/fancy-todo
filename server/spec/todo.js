'use strict';

var expect = require('chai').expect;
var _ = require('lodash');
var app = require('../src/app');
var request = require('supertest');
var application = request(app);

describe('ToDo API', () => {
    describe('/v1/todo/', () => {
        it(' should return empty list of tasks', done => {
            application
                .get('/v1/todo/')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    })
});