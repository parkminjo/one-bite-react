// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newArr1Length = arr1.push(4, 5, 6, 7); // 3

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop(); // 3

// push와 pop보다 느리게 동작함
// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift(); // 1

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newArr4Length = arr4.unshift(4, 5, 6, 7); // 7

// 5. slice
// 가위처럼 배열의 툭정 범위를 잘라내서 새로운 배열로 반환
// 원본 배열의 값을 유지함
let arr5 = [1, 2, 3, 4, 5];
const slicedArr1 = arr5.slice(2, 5); // [3, 4, 5]
const slicedArr2 = arr5.slice(2); // [3, 4, 5]
const slicedArr3 = arr5.slice(-3); // [3, 4, 5] 배열의 뒤에서부터 자름

// 6.concat
// 2개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];
const concatArr = arr6.concat(arr7); // [1, 2, 3, 4]
