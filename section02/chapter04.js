// 1. Spread 연산자
// Spread = 흩뿌리다, 펼치다
// 배열이나 객체에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];

let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  ...arr1,
  c: 3,
  d: 4,
};

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1);

// 2. Rest 매개변수
// 나머지 매개변수
// 함수에서 인수로 전달한 모든 매게변수를 배열에 담아서 저장해줌
// Rest 매개변수 뒤에는 추가적으로 매개변수를 선언할 수 없음
function funcB(one, ...rest) {
  console.log(rest);
}
funcB(...arr2);
