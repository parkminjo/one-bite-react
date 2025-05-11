// 콜백 함수 = 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미함
// main 함수가 원하는 시점에 호출할 수 있음

function main(value) {
  console.log(1);
  console.log(2);
  value();
}

function sub() {
  console.log("I'm sub");
}

main(sub);

// 콜백 함수의 활용
// 구조가 흡사한 함수를 만들 때, 콜백 함수를 이용하면 중복 코드를 발생시키지 않을 수 있음
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, function (idx) {
  console.log(idx * 2);
});

repeat(5, function (idx) {
  console.log(idx * 3);
});
