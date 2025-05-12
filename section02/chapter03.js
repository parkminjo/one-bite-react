// 구조 분해 할당
// 배열이나 객체에서 저장된 여러 개의 값들을 분해해서 각각 다른 변수에 할당하는 문법

// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
  name: '박민조 ',
  age: 26,
  hobby: '카페 탐방',
};

let { name: myName, age, hobby, extra = 'hi' } = person;
console.log(myName, age, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra = 'hi' }) => {
  console.log(name, age, hobby, extra);
};

func(person);
