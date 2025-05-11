// 변수, 상수 = 값을 저장하는 저장소

// 1. 변수 (let)
let age = 25;

age = 30;

// 2. 상수 (const)
// 변수와 달리 상수는 값이 바뀌지 않음
// So, 선언과 동시에 초기화를 해줘야 됨.
const birth = '2000.12.04';

// 3. 변수 명명 규칙
// 3-1, $와 _를 제외한 기호는 사용할 수 없다.
const &example = 1;

// 3-2. 숫자로 시작할 수 없다.
const 2num = 2;

// 3-3. 에약어를 사용할 수 없다.
const let = 1;

// 4. 변수 명명 가이드
// 누가 봐도 바로 이해할 수 있게 변수명 짓기
// why? 협업을 위해서
const salesCount = 1;
const refundCount = 1;

const totalCount = salesCount - refundCount;
