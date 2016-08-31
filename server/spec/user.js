'use strict';

const app = require('../src/app');
const request = require('supertest');
const expect = require('chai').expect;
const application = request(app);

const URL = '/v1/user/';

describe('User API', () => {
    before(done => {
        application.delete(URL).end(done)
    });

    describe('Get users list', () => {
        it('should return empty list of users', done => {
            application
                .get(URL)
                .expect(200)
                .expect('Content-Type', /json/)
                .expect(res => expect(res.body.length).to.equal(0))
                .end(done)
        });
    });

    describe('Add new user', () => {
        it('should add new user', done => {
            application
                .post(URL)
                .expect(201)
                .expect('Content-Type', /json/)
                .end(done)
        })
    });
});