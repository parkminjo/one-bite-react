function funcA() {
  console.log('funcA');
}

let varA = funcA;
varA();

// 1. 함수 표현식
// 값으로 할당되는 것이기 때문에 호이스팅의 대상이 되지 않음
// 콜백 함수의 개념에서 유용하게 사용됨
let varB = function () {
  console.log('funcB');
}; // 익명 함수

varB();

// 2. 화살표 함수
// 함수를 간결하게 생성할 수 있음
let varC = (value) => value + 1;

console.log(varC(10)); // 11
