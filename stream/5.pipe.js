const fs = require('fs');
const zlib = require('zlib');

const readable = fs.createReadStream(__dirname + '/source/pipe.txt');
const writable = fs.createWriteStream(__dirname + '/source/pipeCopy.txt');
const compressed = fs.createWriteStream(__dirname + '/source/pipe.txt.gz');

const gZip = zlib.createGzip(); // create transform stream;

readable.pipe(writable); // pipe returns writable stream
readable.pipe(gZip).pipe(compressed);
