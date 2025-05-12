// function add(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum);
//   }, 3000);
// }

// add(1, 2, (value) => {
//   console.log(value);
// });

// 음식을 주문하는 상황
// food를 orderFood 바깥에서 사용하려면 콜백 함수를 이용하면 됨
function orderFood(callback) {
  setTimeout(() => {
    const food = '국밥';
    callback(food);
  }, 3000);
}

function coolDownFood(food, callback) {
  setTimeout(() => {
    const coolDownedFood = `식은 ${food}`;
    callback(coolDownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const frozeFood = `냉동된 ${food}`;
    callback(frozeFood);
  }, 1000);
}

orderFood((food) => {
  console.log(food);

  coolDownFood(food, (coolDownedFood) => {
    console.log(coolDownedFood);

    freezeFood(coolDownedFood, (frozeFood) => {
      console.log(frozeFood);
    });
  });
});
// 기능이 늘어날수록 콜백 지옥이 발생될 위험이 있음!
