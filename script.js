import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // stages: [
  //   { duration: '30s', target: 20 },
  //   { duration: '1m30s', target: 10 },
  //   { duration: '20s', target: 0 },
  // ],
  vus: 400,
  duration: '20s',
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

export default function () {
  http.post('http://localhost:3003/legos', obj, params);
  sleep(1);
}
// export default function () {
//   http.get('http://localhost:3003');
//   sleep(1);
// }
