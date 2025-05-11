// 조건문 = 특정 조건을 만족할 때 실행되는 코드를 작성하기 위해 사용하는 문법

// 1. if문
let num = 10;

if (num > 10) {
  console.log('num은 10보다 큽니다.');
} else if (num === 10) {
  console.log('num은 10입니다.');
} else {
  console.log('num은 10보다 작습니다.');
}

// 2. switch문
// if문과 기능 자체는 동일함
// 다수의 조건을 처리할 때 if보다 더 직관적임

let animal = 'cat';

switch (animal) {
  case 'cat': {
    console.log('고양이');
    break;
  }

  case 'dog': {
    console.log('강아지');
    break;
  }

  case 'bear': {
    console.log('곰');
    break;
  }

  case 'tiger': {
    console.log('호랑이');
    break;
  }
  default: {
    console.log('일치하는 동물이 없습니다.');
  }
}

// 어떠한 변수의 값을 기준으로 다른 값을 출력하고 싶다면, switch문 사용
// 복잡한 조건을 사용하고 싶다면, if문 사용
