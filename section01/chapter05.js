// 1. Number Type
const num1 = 12;
const num2 = 1.5;
const num3 = -20;

const infinity = Infinity;
const minInfinity = -Infinity;

const nan = NaN;

// 2. String Type
const myName = '민조';
const myLocation = '서울';
const introduce = myName + myLocation;

const introduceText = `${myName}는 ${myLocation}에 거주합니다.`; // 템플릿 리터럴 문법

// 3. Boolean Type
const isEmpty = false;
const isOpen = true;

// 4. Null Type (아무것도 없다)
// 개발자들이 직접 할당해서 사용함
const empty = null;

// 5. Undefined Type
// 아무런 값도 할당하지 않았을 때 자동으로 할당됨
let none;
console.log(none); // undefined
