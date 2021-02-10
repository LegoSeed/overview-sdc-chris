/* eslint-disable func-names */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // target is the VUs
  stages: [
    { duration: '1s', target: 20 },
    { duration: '1s', target: 250 },
    { duration: '60s', target: 250 },
  ],
};

const obj = JSON.stringify({
  product: {
    name: 'testname',
    brand: 'test company',
    price: 33,
    reviewTotal: 29,
    reviewAvg: 4.5,
    quantity: 13,
    ageRec: 14,
    pieceCount: 2000,
    vipPoints: 200,
    itemNum: 1234,
  },
});

const params = {
  headers: {
    'Content-Type': 'application/json',
  },
};
// for get route
export default function () {
  http.get(`http://3.17.151.84/legos/${Math.floor(Math.random() * 10000000) + 1}`);
  http.post('http://3.17.151.84/legos', obj, params);
  sleep(1);
}
// for post route
// export default function () {
//   http.post('http://localhost:3003/legos', obj, params);
//   sleep(1);
// }
// export default function () {
//   http.get('http://localhost:3003');
//   sleep(1);
// }
