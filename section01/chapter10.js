// 반복문 = 어떠하나 동작을 반복해서 수행할 수 있도록 만들어 주는 문법

// for문
for (let idx = 0; idx < 5; idx++) {
  console.log(idx);
}

// 조긴식을 만족하지 않았을 때, 강제로 종료하는 방법
for (let idx = 0; idx <= 10; idx++) {
  console.log(idx);

  if (idx >= 5) {
    break;
  }
}

// 반복문의 특정 회차를 건너뛰는 방법
// 짝수일 때는 출력하지 않음
for (let idx = 0; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue;
  }

  console.log(idx);
}
