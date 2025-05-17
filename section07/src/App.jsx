import './App.css';
import { useEffect, useRef, useState } from 'react';
import Controller from './components/Controller';
import Viewer from './components/Viewer';

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // 컴포넌트가 처음 렌더링 됐는지 확인하는 변수
  const isMountRef = useRef(false);

  // 1. mount
  useEffect(() => {
    console.log('mount');
  }, []);

  // 2. update
  useEffect(() => {
    if (!isMountRef.current) {
      isMountRef.current = true;
      return;
    }

    console.log('update');
  });

  // 3. unmount

  return (
    <main className="app">
      <h1>Simple Counter</h1>
      <Viewer count={count} />
      <Controller setCount={setCount} />
      <section>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </section>
    </main>
  );
};

export default App;
