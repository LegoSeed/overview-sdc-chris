/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from './frontend/src/components/app.js';
import Carousel from './frontend/src/components/carousel.js';
import ProductFooter from './frontend/src/components/productFooter.js';
import ProductInfo from './frontend/src/components/productInfo.js';
import Quantity from './frontend/src/components/quantity.js';
// import server from './backend/server/server';
import 'pure-react-carousel/dist/react-carousel.es.css';

// const express = require('express');
const supertest = require('supertest');
const mongoose = require('mongoose');
const { LegoList } = require('./backend/mongo/database');

const server = require('./backend/server/server');

// const app = express();
// app.use(server);
// jest.useFakeTimers
Enzyme.configure({ adapter: new Adapter() });
const request = supertest(server);
const databaseName = 'legos';

/*  *********************** DATABASE TESTING ************************ */

beforeAll(async () => {
  const url = `mongodb://localhost/${databaseName}`;
  await mongoose.disconnect();
  await mongoose.connect(url, { useNewUrlParser: true });
});

it('Should have ducati lego set in database', async (done) => {
  const query = LegoList.where({ name: 'Ducati Panigale V4 R' });
  query.findOne((err, response) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('err');
    } else {
      expect(JSON.stringify(response.name)).toMatch('Ducati Panigale V4 R');
      done();
    }
  });
});

/*  ********************** FRONT END TESTING ************************ */
describe('front end testing', () => {
  it('App correctly renders', async (done) => {
    const wrapper = await shallow(<App />);
    expect(wrapper.exists()).toBe(true);
    done();
  });

  it('Carousel correctly renders', async (done) => {
    const pics = [
      'https://legopics.s3.us-east-2.amazonaws.com/Ducati/1',
      'https://legopics.s3.us-east-2.amazonaws.com/Ducati/2',
      'https://legopics.s3.us-east-2.amazonaws.com/Ducati/3',
      'https://legopics.s3.us-east-2.amazonaws.com/Ducati/4',
      'https://legopics.s3.us-east-2.amazonaws.com/Ducati/5',
      'https://legopics.s3.us-east-2.amazonaws.com/Ducati/6',
      'https://legopics.s3.us-east-2.amazonaws.com/Ducati/7',
      'https://legopics.s3.us-east-2.amazonaws.com/Ducati/8',
      'https://legopics.s3.us-east-2.amazonaws.com/Ducati/9',
      'https://legopics.s3.us-east-2.amazonaws.com/Ducati/10',
    ];
    const wrapper = await shallow(<Carousel pictures={pics} />);
    expect(wrapper.exists()).toBe(true);
    done();
  });
  it('ProductFooter correctly renders', async (done) => {
    const lego = {
      ageRec: 10,
      pieceCount: 100,
      vipPoints: 250,
      itemNum: 22132,
    };
    const wrapper = await shallow(
      <ProductFooter lego={lego} />,
    );
    expect(wrapper.exists()).toBe(true);
    done();
  });
  it('ProductInfo info correctly renders', async (done) => {
    const lego = {
      brand: 'lego',
      name: 'ducati',
      reviewAvg: 4.4,
      reviewTotal: 56,
      price: 69.99,
      quantity: 3,
    };
    const wrapper = await shallow(<ProductInfo lego={lego} />);
    expect(wrapper.exists()).toBe(true);
    done();
  });

  it('Quantity correctly renders', async (done) => {
    const wrapper = await shallow(<Quantity />);
    expect(wrapper.exists()).toBe(true);
    done();
  });
});

/*  *********************** CONNECTION TESTING ******************** */
// request.get('/');
describe('Connection Tests', () => {
  it('Sacrificial Test', async (done) => {
    supertest(server)
      .get('/test')
      .expect(200)
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          expect(res.status).toBe(200);
          done();
        }
      });
  });

  it('Should return status code 200', async (done) => {
    // request()
    supertest(server)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          expect(res.status).toBe(200);
          done();
        }
      });
  });

  //   const res = await request.get('/');
  //   console.log(res.status);
  //   expect(res.status).toBe(200);
  //   done();
  // });

  it('Response body should not return undefined', async (done) => {
    const res = await request.get('/legos');
    expect(res.body).toBeDefined();
    done();
  });

  it('Request should return an array of objects', async (done) => {
    const res = await request.get('/legos');
    const isTrue = Array.isArray(res.body);
    expect(isTrue).toBe(true);
    expect(typeof res.body[0]).toBe('object');
    done();
  });
});

// afterAll(async (done) => {
//   // Closing the DB connection allows Jest to exit successfully.
//   mongoose.connection.close();
//   done();
// });
