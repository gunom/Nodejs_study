console.log('require가 가장 위에 오지 않아도 됩니다.');

module.exports = '저를 찾아보세요.'; // exports와 require은 꼭 최상단이나 최하단에 위치할 필요 없음.

require('./var'); // require한 파일은 require.cache에 저장.

console.log('require.cache입니다.');
console.log(require.cache);
console.log('require.main입니다.');
console.log(require.main===module); // 현재 파일이 첫 모듈인지 확인.
console.log(require.main.filename);
