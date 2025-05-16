import './App.css';
import { useState } from 'react';

const App = () => {
  // state 초기값
  // state를 변화시키는 함수
  const [count, setCount] = useState(0);
  const [light, setLight] = useState('OFF');

  return (
    <div>
      <div>
        <h1>{light}</h1>
        <button onClick={() => setLight(light === 'ON' ? 'OFF' : 'ON')}>
          {light === 'ON' ? '끄기' : '켜기'}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
    </div>
  );
};

export default App;
