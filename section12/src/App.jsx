import './App.css';
import { Route, Routes } from 'react-router-dom';
import { createContext, useReducer, useRef } from 'react';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import NotFound from './pages/NotFound';
import Edit from './pages/Edit';

const mockData = [
  {
    diaryId: 1,
    createdDate: new Date('2025-05-21').getTime(),
    emotionId: 1,
    content: '1번 일기 내용',
  },
  {
    diaryId: 2,
    createdDate: new Date('2025-05-20').getTime(),
    emotionId: 2,
    content: '2번 일기 내용',
  },
  {
    diaryId: 3,
    createdDate: new Date('2025-04-12').getTime(),
    emotionId: 3,
    content: '3번 일기 내용',
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.data];
    case 'UPDATE':
      return state.map((diary) =>
        String(diary.diaryId) === String(action.data.diaryId)
          ? action.data
          : diary
      );
    case 'DELETE':
      return state.filter(
        (diary) => String(diary.diaryId) !== String(action.targetId)
      );
    default:
      return state;
  }
};

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

const App = () => {
  const [diaryList, dispatch] = useReducer(reducer, mockData);
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
  const onUpdate = (diaryId, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        diaryId,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (targetId) => {
    dispatch({
      type: 'DELETE',
      targetId,
    });
  };

  return (
    <DiaryStateContext.Provider value={diaryList}>
      <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};

export default App;
