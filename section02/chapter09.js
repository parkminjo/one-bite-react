// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
  { name: '짱구', hobby: '테니스' },
  { name: '철수', hobby: '테니스' },
  { name: '맹구', hobby: '돌 수집' },
];

const tennisPeople = arr1.filter((item, idx, arr) => item.hobby === '테니스');

// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백 함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반한
let arr2 = [1, 2, 3];
arr2.map((item, idx, arr) => item * 2);

const names = arr1.map((item) => item.name); // ['짱구', '철수', '맹구']

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ['b', 'a', 'c'];
arr3.sort();

let arr4 = [10, 2, 5];
arr4.sort((a, b) => a - b);

// 4. toSorted
// 원본 배열은 유지하고 새로운 배열을 반환
let arr5 = ['b', 'a', 'c'];
const sortedArr = arr5.toSorted(); // ['a', 'b', 'c']

// 5, join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ['hi', 'hello', 'bye'];
const joinedArr = arr6.join('');
