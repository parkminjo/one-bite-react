// function returnFalse() {
//   console.log('False 함수');
//   return false; // falsy한 값도 가능함
// }

// function returnTrue() {
//   console.log('True 함수');
//   return true;
// }

// console.log(returnTrue() && returnFalse());
// console.log(returnTrue() || returnFalse());

// 단락 평가
// 조건문을 이용하지 않고도 특정 상황에서 어떤 함수를 호출하지 않도록 방지하거나 어떠한 값을 계산하지 않도록 제한할 수 있음

// 단략 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || 'person의 값이 없음');
}

printName();
printName({ name: '박민조' });

// 프로젝트를 진행하면서 단락 평가를 사용하는 경우가 많았는데, 왜 필요한지 모르고 그냥 썼던 경우가 많았음
// 이렇게 학습을 하니깐 내가 그동안 작성한 코드에서 ||와 &&의 처리가 왜 필요했는지 깨닫게 됨
// 값이 없을 경우를 대비하여, 즉 오류가 발생할 경우를 방지해주는 역할을 함
