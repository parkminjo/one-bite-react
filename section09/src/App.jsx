import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import TodoList from './components/TodoList';
import { act, useReducer, useRef, useState } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.data];
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.targetId);
    case 'UPDATE':
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );
    default:
      return state;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(3);

  const addTodo = (content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  };

  const deleteTodo = (targetId) => {
    // todos의 값들 중에서
    // targetId와 잋리하는 id를 갖는 todo만 삭제한 새로운 배열
    dispatch({
      type: 'DELETE',
      targetId,
    });
  };

  const updateTodo = (targetId) => {
    // todos의 값들 중에서
    // targetId와 일치하는 id를 갖는 todo의 isDone을 변경
    dispatch({
      type: 'UPDATE',
      targetId,
    });
  };

  return (
    <div className="app">
      <Header />
      <Editor onCreate={addTodo} />
      <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
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
