import './App.css';
import { useState } from 'react';
import Controller from './components/Controller';
import Viewer from './components/Viewer';

const App = () => {
  // 왜 App 컴포넌트에서 상태를 관리할까?
  // Viewer 컴포넌트와 Controller 컴포넌트는 형제 관계이기 때문에 서로 값을 공유할 수 없는 구조임
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <h1>Simple Counter</h1>
      <Viewer />
      <Controller />
    </main>
  );
};

export default App;
