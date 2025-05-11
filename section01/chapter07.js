// 1. 대입 연산자 (=)
// 값을 할당할 때 사용
let num = 1;

// 2. 산술 연산자
let num1 = 3 + 2; // 덧셈
let num2 = 3 - 2; // 뺄셈
let num3 = 3 * 2; // 곱셈
let num4 = 3 / 2; // 나눗셈
let num5 = 3 % 2; // 모듈러 연산자

// 3.복합 대입 연산자
// 산술 연산자와 대입 연산자를 한 번에 사용할 수 있음
let num6 = 10;
num6 += 20;
num6 -= 20;
num6 *= 20;
num6 /= 20;
num6 %= 20;

// 4. 증감 연산자
let num7 = 10;
num7++;
console.log(num7); // 11
// ++을 뒤에서 사용하게 되면 해당 라인이 끝나고 나서 1이 추가됨
// 만약, 해당 라인에서 바로 1이 추가되게 하고 싶다면, ++을 앞에서 사용하면 됨
console.log(++num7); // 11

// 5. 논리 연산자
let or = true || false; // 하나만 true여도 true
let and = true && false; // 모든 값이 true일 때, true
let not = !true; // true이면 false, false이면 true
console.log(or);
console.log(and);
console.log(not);

// 6. 비교 연산자
// type까지 비교해주는 연산자와 아닌 연산자가 있음
// 동등 비교 연산자
let comp1 = 1 === 2;
console.log(comp1); // false

// 비동등 비교 연산자
let comp2 = 1 !== 2;
console.log(comp2); // true

// 대소 비교
let comp3 = 2 > 1;
console.log(comp3); // true

let comp4 = 2 < 1;
console.log(comp4); // false
