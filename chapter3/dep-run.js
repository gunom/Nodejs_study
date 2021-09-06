const dep1 = require('./dep1');
const dep2 = require('./dep2');
// 상호 참조 시 순환 참조 발생.
dep1();
dep2();