import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import TodoList from './components/TodoList';
import { useRef, useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const addTodo = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <div className="app">
      <Header />
      <Editor onCreate={addTodo} />
      <TodoList />
    </div>
  );
};

export default App;

// TodoList 데이터 모델링
const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: 'Next.js 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 3,
    isDone: false,
    content: 'Computer Science 공부하기',
    date: new Date().getTime(),
  },
];
