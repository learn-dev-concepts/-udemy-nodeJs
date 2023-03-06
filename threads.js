process.env.UV_THREADPOOL_SIZE = 8;
const crypto = require('crypto');


const start = Date.now();

const checkTime = (number) => {
  console.log(`${number}: `,Date.now() - start);
};

const encrypt= (i = 1) => {
  crypto.pbkdf2('a', 'b', 300000, 512, 'sha512', checkTime.bind(null, i));
};

const setTimer = () => {
  setTimeout(() => console.log('timer'), 1500);
}
 
for (let i = 1; i < 9; i++) {  
  encrypt(i);
  setTimer();
}

