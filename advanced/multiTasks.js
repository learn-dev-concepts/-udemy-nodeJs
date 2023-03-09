const crypto = require('crypto');
const https = require('https');
const fs = require('fs');

const start = Date.now();

const checkTime = (number) => {
  console.log(`${number}: `,Date.now() - start);
};

const encrypt= (i = 1) => {
  crypto.pbkdf2('a', 'b', 300000, 512, 'sha512', checkTime.bind(null, i));
};

const doReadFile = () => {
  // access HD 2 times
  // one for get stat other for real data
  fs.readFile('multiTasks.js', 'utf8', () => checkTime('FS'))
};

const doRequest = (i = 1) => {
  https.request('https://www.google.com', (res) => {
    res.on('data', () => {});
    res.on('end', () => checkTime(i));
  }).end();
};


const fsFirst = () => {
  doReadFile();
  
  for (let i = 1; i < 4; i++) {
    encrypt(i);
  }
  doRequest('http');
};

const spendSameTime = () => {
  // doReadFile();
  for (let i = 1; i < 5; i++) {
    encrypt(i);
  }
  doRequest('http');
};

// fsFirst();
spendSameTime();