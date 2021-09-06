const buffer = Buffer.from('Change me to buffer!');
console.log('form():', buffer);
console.log('length():', buffer.length);
console.log('toString():', buffer.toString());

const array = [
    Buffer.from('ddium '),
    Buffer.from('ddium '),
    Buffer.from('ddium'),
];
const buffer2 = Buffer.concat(array);
console.log('concat():', buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log('alloc():', buffer3);