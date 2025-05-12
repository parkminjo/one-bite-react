// 1. falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = 10;
let f5 = NaN;
let f6 = '';
let f7 = 0n;

if (!f1) {
  console.log('falsy');
}

// 2. truthy한 값
// 7가지의 falsy한 값을 제외한 나머지 모든 값

// 3. 활용 사례
// 값이 falsy한 상황일 때 비효율적인 조건문을 간결하게 작성할 수 있음
function printName(person) {
  if (!person) {
    console.log('person의 값이 없음');
    return;
  }
  console.log(person.name);
}

let person;
printName(person);
