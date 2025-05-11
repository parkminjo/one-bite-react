// 1. null 병합 연산자 (??)
// 존재하는 값을 추려내는 기능
// 피연산자 중에서 null, undefined가 아닌 값을 찾아내는 연산자
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 10
let var5 = var1 ?? var3; // 20

// 둘 다 null 혹은 undefined가 아닐 때는 첫번째 값을 할당함
let var6 = var2 ?? var3; // 10

// 실무에서 사용하는 예시
let userName = '박민조';
let userNickname = '새로 가입한 사용자';

let displayName = userName ?? userNickname; // userName이 undefined일 때는 userNickname을 보여줌

// 2. typeof 연산자
// 값의 타입을 문자열로 반환하는 기능을 함
let var7 = 'Hello';
let typeOfVar7 = typeof var7;
console.log(typeOfVar7); // string

// 3. 삼항 연산자
// 항을 3개 사용하는 연산자
// 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환함
let var8 = 10;
let result = var8 % 2 === 0 ? '짝수' : '홀수';
console.log(result); // "짝수"
