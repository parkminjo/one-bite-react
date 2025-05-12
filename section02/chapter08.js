// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach((item, idx, arr) => {
  // console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2); // [2, 4, 6]
});

// 2.includes
// 배열에 특정 요소가 있는지 확인하는 메서드
// boolean값을 반환
// 얕은 비교로 동작함
let arr2 = [1, 2, 3];
arr2.includes(3); // true
arr2.includes(10); // false

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
arr3.indexOf(2); // 1
arr3.indexOf(4); // 존재하지 않을 때는 -1을 반환

// let objArr = [{ name: '홍길동' }, { name: '홍길순' }];
// objArr.indexOf({ name: '홍길동' }); // -1
// objArr.findIndex((item) => item.name === '홍길동'); // 0

// 4. findIndex
// 모든 요소를 순회하면서, 콜백 함수를 만족하는 특정 요소의 인덱스(위치)를 반환하는 메서드
// 배열 내부에 객채 타압의 요소가 있을 경우, indexOf로 찾기 어려움
let arr4 = [1, 2, 3];
arr4.findIndex((item) => item % 2 === 0); // 1

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾아서 그대로 반환
let arr5 = [{ name: '홍길동' }, { name: '홍길순' }];
arr5.find((item) => item.name === '홍길순'); // {name: '홍길순'}
