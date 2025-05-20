import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import TodoList from './components/TodoList';
import {
  act,
  createContext,
  useCallback,
  useReducer,
  useRef,
  useState,
} from 'react';

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

export const TodoContext = createContext();

const App = () => {
  const [todos, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(4);

  const addTodo = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const updateTodo = useCallback((targetId) => {
    // todos의 값들 중에서
    // targetId와 일치하는 id를 갖는 todo의 isDone을 변경
    dispatch({
      type: 'UPDATE',
      targetId,
    });
  }, []);

  const deleteTodo = useCallback((targetId) => {
    // todos의 값들 중에서
    // targetId와 잋리하는 id를 갖는 todo만 삭제한 새로운 배열
    dispatch({
      type: 'DELETE',
      targetId,
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <TodoContext.Provider
        value={{
          todos,
          onCreate: addTodo,
          onUpdate: updateTodo,
          onDelete: deleteTodo,
        }}
      >
        <Editor />
        <TodoList />
      </TodoContext.Provider>
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
