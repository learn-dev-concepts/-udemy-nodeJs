const buf = new Buffer('Hello', 'utf8');
console.log('buf', buf);
console.log('string', buf.toString());
console.log('json', buf.toJSON());
console.log('arr', buf[3]);

buf.write('wo');
console.log('string', buf.toString());