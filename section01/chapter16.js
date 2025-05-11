// 1. 상수 객체
// 객체의 프로퍼티를 다루는 것은 가능함
const animal = {
  type: '고양이',
  name: '후추',
  color: '턱시도',
};

animal.age = 2;
animal.name = '감자';
delete animal.color;

// 2. 메서드
// 값이 함수인 프로퍼티를 말함
const person = {
  name: '박민조',
  // 메서드 선언
  // 객체의 동작을 정의할 때 사용함
  sayHello: () => {
    console.log('Hello');
  },
};

person.sayHello();
person['sayHello']();
