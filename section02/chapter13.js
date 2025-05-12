// Promise
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체

// Promise의 3가지 상태
// pending = 아직 작업이 완료되지 않은 상태
// resolve(해결) -> fulfilled = 비동기 작업이 성공적으로 마무리 된 상태
// reject(거부) -> rejected = 비동기 작업이 실패한 상태

// 1. 비동기 작업 실행

// 2. 비동기 작업 상태 관리

// 3. 비동기 작업 결과 저장

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // Executor 함수 = 비동기 작업을 실행하는 함수
    // resolve 호출 = 비동기 작업 성공
    // reject 호출 = 비동기 작업 실패
    setTimeout(() => {
      if (typeof num === 'number') {
        resolve(num + 10);
      } else {
        reject('num은 숫자가 아닙니다.');
      }
    }, 1000);
  });

  return promise;
}

// then, catch 메서드
// 비동기 작업의 결괏값을 불러올 수 있음
// then은 Promise 객체를 다시 반환하기 때문에, 뒤에 catch를 바로 사용할 수 있음 = Promise Chaining
// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result); // 기존의 Promise 객체가 아닌 새로운 Promise 객체를 반환할 수 있음
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));
