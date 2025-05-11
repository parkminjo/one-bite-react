// 1. 묵시적 형 변환
// 자바스크립트 엔진이 알아서 형 변환을 해줌

let num1 = 10;
let str1 = '20';

const result = num + str;
console.log(result); // "1020"

// 2. 명시적 형 변환
// 개발자가 내장 함수 등을 이용해서 직접 형 변환을 명시함
let str2 = '10';
let strToNum1 = Number(str2);
console.log(10 + strToNum1); // 20

let str3 = '10개';
let strToNum2 = parseInt(str3); // Number Type이 아닌 것을 포함하고 있어도 숫자로 변환해줌
console.log(10 + strToNum2); // 20

let num2 = 20;
let numToStr = String(num2);
console.log(numToStr + '입니다'); // 20입니다
