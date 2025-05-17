// React Hooks의 3가지 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능하다.
// 해당 부분이 아닌 곳에서 호출하면 오류가 발생함

// 2. 조건부로 호출될 수 없다.
// 서로 다른 Hook들의 호출 순서가 엉망이 되어 버리는 현상이 발생해서 내부적인 오류가 발생할 수 있음

// 3. 커스텀 훅 제작이 가능하다.
// 함수 앞에 use라는 키워드만 붙여주면 커스텀 훅이 됨

import { useState } from 'react';

const useInput = () => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return [input, handleChange];
};

export default useInput;
