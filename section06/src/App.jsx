import './App.css';
import { useState } from 'react';
import Controller from './components/Controller';
import Viewer from './components/Viewer';

const App = () => {
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
