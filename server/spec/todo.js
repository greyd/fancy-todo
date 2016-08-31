'use strict';

var _ = require('lodash');
var app = require('../src/app');
var request = require('supertest');
var expect = require('chai').expect;
var application = request(app);

describe('ToDo API', () => {
    before(done => {
        application.delete('/v1/todo/').end(done)
    });

    describe('Get todo list', () => {
        it('should return empty list of tasks', done => {
            application
                .get('/v1/todo/')
                .expect('Content-Type', /json/)
                .expect(200)
                .expect(res => {
                    if (res.body.length !== 0) throw Error('list should be empty');
                })
                .end(done)
        });
    });

    describe('Create a new item', () => {
        it('should add an item to the list', done => {
            application
                .post('/v1/todo/')
                .send({text:'text'})
                .expect(201, done)
        });

        it('item should have a correct text', done => {
            application
                .get('/v1/todo/')
                .expect(200)
                .expect(res => expect(res.body.length).to.equal(1))
                .end(done);
        });

        it('should return an error if we try to add item with the same name', done => {
            application
                .post('/v1/todo/')
                .send({text: 'text'})
                .expect('Content-Type', /html/)
                .expect(500, done);
        });
    })
});