// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자, 현재 날짜 생성

let date2 = new Date('1997-01-07'); // . / - 로 날짜를 구분함

// 2. 타임 스탬프
// 특정 시간 "2025.01,01 00시 00분 00초"(UTC)로 부터 몇 ms가 지났는지를 의미하는 숫자값
// UTC = 세계의 모든 나라가 사용하는 세계의 시작 기준
let timeStamp1 = date1.getTime();
let date4 = new Date(timeStamp1);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 월이 0부터 시작함
let date = date1.getDate();

let hours = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);

date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포맷으로 출력하기
// 시간을 제외한 날짜 출력
console.log(date1.toDateString());
// 현지화된 포맷으로 시간 출력
console.log(date1.toLocaleString());
