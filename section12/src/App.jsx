import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import NotFound from './pages/NotFound';
import Edit from './pages/Edit';
import { useReducer, useRef } from 'react';

const mockData = [
  {
    diaryId: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: '1번 일기 내용',
  },
  {
    diaryId: 2,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: '2번 일기 내용',
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.data];
    case 'UPDATE':
      return;
    case 'DELETE':
      return;
    default:
      return state;
  }
};

const App = () => {
  const [diaryData, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        diaryId: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = () => {
    dispatch({
      type: 'UPDATE',
    });
  };

  // 기존 일기 삭제
  const onDelete = () => {
    dispatch({
      type: 'DELETE',
    });
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/diary/:id" element={<Diary />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
