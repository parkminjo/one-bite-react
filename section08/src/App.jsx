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

  const updateTodo = (targetId) => {
    // todo State의 값들 중에서
    // targetId와 일치하는 id를 갖는 Todo item의 isDone을 변경'
    const updatedTodos = todos.map((todo) =>
      todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
    );

    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <Header />
      <Editor onCreate={addTodo} />
      <TodoList todos={todos} onUpdate={updateTodo} />
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
