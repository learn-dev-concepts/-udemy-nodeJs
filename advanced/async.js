const https = require('https');

const start = Date.now();
const checkTime = (number) => {
  console.log(`${number}: `,Date.now() - start);
};

const doRequest = (i = 1) => {
  https.request('https://www.google.com', (res) => {
    res.on('data', () => {});
    res.on('end', () => checkTime(i));
  }).end();
};

for (let i = 0; i < 6; i++) {
  doRequest(i + 1)
}
