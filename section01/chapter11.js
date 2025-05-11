// 햄수 = 동일한 코드가 반복될 때 하나로 묶어서 이름을 붙일 수 있는 문법 (for 유지 보수)
// 함수 이름을 통해서 간단하게 사용할 수 있음

// 함수 선언
// 함수가 호출됐을 때, 어떤 코드를 실행할 것인지 미리 준비하는 작업
function greeting() {
  console.log('안녕하세요!');
}

// 함수 호출
// 함수를 호출해야 실행됨
// 뒤에 반드시 ()를 붙여줘야 됨
greeting();

// 직사각형 넓이를 구하는 함수
// 매개변수 = 함수한테 전달한 값을 순서대로 저장하는 변수
function getArea1(width, height) {
  const area = width * height;
  console.log(area);
}

getArea1(10, 20); // 인수 = 함수한테 전달한 값

// 함수 내부의 값을 반환하도록 하는 방법
function getArea2(width, height) {
  const area = width * height;
  return area;
}

const area = getArea2(10, 30);
console.log(area); // 300

// 호이스팅으로 인해, 함수 호출문이 함수 선언문 위에 있어도 실행이 됨
