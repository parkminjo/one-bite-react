import './App.css';
import { createContext, useCallback, useMemo, useReducer, useRef } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import TodoList from './components/TodoList';
import { TodoDispatchContext } from './context/TodoDispatchContext';
import { TodoStateContext } from './context/TodoStateContext';
import { reducer } from './reducer/reducer';

const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);

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

  const memoizedDispatch = useMemo(() => {
    return {
      onCreate: addTodo,
      onUpdate: updateTodo,
      onDelete: deleteTodo,
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
};

export default App;
