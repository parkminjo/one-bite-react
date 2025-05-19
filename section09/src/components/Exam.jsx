import { useReducer } from 'react';

const reducer = (state, action) => {
  // if (action.type === 'INCREASE') {
  //   return state + action.data;
  // }
  // if (action.type === 'DECREASE') {
  //   return state - action.data;
  // }

  switch (action.type) {
    case 'INCREASE':
      return state + action.data;
    case 'DECREASE':
      return state - action.data;
    default:
      return state;
  }
};

const Exam = () => {
  // dispatch = 발송하다 => 상태 변화를 있어야 한다고 알리는 함수
  const [state, dispatch] = useReducer(reducer, 0);

  const handleClickPlusButton = () => {
    // 인수로 상태를 어떻게 변화되길 원하는지 전달해줘야됨
    // 해당 객체를 액션 객체라고 부름
    dispatch({
      type: 'INCREASE',
      data: 1,
    });
  };

  const handleClickMinusButton = () => {
    dispatch({
      type: 'DECREASE',
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handleClickPlusButton}>+1</button>
      <button onClick={handleClickMinusButton}>-1</button>
    </div>
  );
};

export default Exam;
