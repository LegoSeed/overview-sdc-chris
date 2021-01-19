const supertest = require('supertest');
const app = require('./backend/server/server');

const request = supertest(app);

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

describe('Connection Tests', () => {
  it('Should return status code 200', async (done) => {
    const res = await request.get('/');
    expect(res.status).toBe(200);
    done();
  });

  it('Request body should not return null', async (done) => {
    const res = await request.get('/legos');
    expect(res.body).not.toBe(null);
    done();
  });

  it('Request should return an array of objects', async (done) => {
    const res = await request.get('/legos');
    expect(Array.isArray(res.body)).toBe(true);
    expect(typeof res.body[0]).toBe('object');
    done();
  });
});

// import React from 'react';
// import Enzyme from 'enzyme';
// import { configure } from 'enzyme';
// import { shallow, mount, render } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// const databaseName = 'legos';

// beforeAll(async () => {
//   const url = `mongodb://localhost/${databaseName}`;
//   await mongoose.disconnect();
//   await mongoose.connect(url, { useNewUrlParser: true });
// });

// afterAll(() => mongoose.disconnect());
