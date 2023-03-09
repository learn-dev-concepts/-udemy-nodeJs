// const buf = new ArrayBuffer(8); // 8 bytes , this feature comes from v8, not node
const buf = new ArrayBuffer(12);
const view = new Int32Array(buf);

view[0] = 5;
view[1] = 15;
// view[2] = 20;
console.log(view);