'use strict';

//const _ = require('lodash');
const app = require('../src/app');
const request = require('supertest');
const expect = require('chai').expect;
const application = request(app);

const URL = '/v1/todo/';

describe('ToDo API', () => {
    before(done => {
        application.delete(URL).end(done)
    });

    describe('Get todo list', () => {
        it('should return empty list of tasks', done => {
            application
                .get(URL)
                .expect('Content-Type', /json/)
                .expect(200)
                .expect(res => expect(res.body.length).to.equal(0))
                .end(done)
        });
    });

    describe('Create a new item', () => {
        it('should add an item to the list', done => {
            application
                .post(URL)
                .send({text:'text'})
                .expect(201, done)
        });

        it('item should have a correct text', done => {
            application
                .get(URL)
                .expect(200)
                .expect(res => expect(res.body.length).to.equal(1))
                .end(done);
        });

        it('should return an error if we try to add item with the same name', done => {
            application
                .post(URL)
                .send({text: 'text'})
                .expect('Content-Type', /html/)
                .expect(500, done);
        });
    });

    describe('Remove single item', () => {
        before(done => {
            application
                .post(URL)
                .send({text:'text'})
                .end(done)
        });
        it('should remove items form the list', () =>
            application
                .get(URL)
                .then(res =>
                    application
                        .delete(URL + res.body[0].id)
                        .expect(204)
                )

        );
    });
});