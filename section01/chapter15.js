// 객체 = 여러가지 값을 동시에 저장할 수 있는 자료형

// 1. 객체 생성 방법
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
// key: value의
// key = 문자열이나 숫자 사용
// value = 타입 제한이 없음
let person = {
  name: '박민조',
  age: 26,
  hobby: '카페 탐방',
  extra: {},
  10: 20,
  'like cat': true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근하는 방법 (점 표기법, 괄호 표기법)
// 점 표기법
const personName = person.name;
console.log(personName); // 박민조

// 괄호 표기법 (key를 문자열로 명시)
// 동적으로 value를 가져올 때 용이함
const personAge = person['age'];
console.log(personAge); // 26

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.job = 'FrontEnd Developer';
person['favoriteFood'] = '김치찌개';

// 3-3. 프로퍼티를 수정하는 방법
person.job = 'Designer';
person['favoriteFood'] = '평양냉면';

// 3-4. 프로퍼티를 삭제하는 방법
delete person.job;
delete person['job'];

// 3-5. 프로퍼티의 존재 유무를 확인하는 방법
let result1 = 'name' in person;
console.log(result1); // true

let result2 = 'cat' in person;
console.log(result2); // false
