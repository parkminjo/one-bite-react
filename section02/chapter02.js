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
