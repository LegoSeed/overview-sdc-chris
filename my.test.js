import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './frontend/src/components/app.js';

const supertest = require('supertest');

import ReactDOM from 'react-dom';

const application = require('./backend/server/server');

Enzyme.configure({ adapter: new Adapter() });

const request = supertest(application);

// it('renders without crashing', () => {
//   const wrapper = shallow(<App />);
//   const h1 = wrapper.find('h1');
//   const result = h1.text();
//   expect(result).toBe('Lego Project');
// });

describe('front end testing', () => {
  it('renders correctly enzyme', (done) => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
    done();
  });
});

test('adds 2 + 3 to equal 3', () => {
  expect(2 + 3).toBe(5);
});

describe('Connection Tests', () => {
  it('Should return status code 200', async (done) => {
    request.get('/').expect(200);
    done();
  });

  it('Request body should not return null', () => {
    request.get('/legos').expect(200).end((err, response) => {
      expect(response).not.toBe(null);
      done();
    });
  });

  it('Request should return an array of objects', () => {
    request.get('/legos').end((err, response) => {
      Array.isArray(response.body).toBe(true);
      expect(typeof response.body[0]).toBe('object');
      done();
    });
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
