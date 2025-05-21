import './App.css';
import { Route, Routes } from 'react-router-dom';
import { createContext, useEffect, useReducer, useRef, useState } from 'react';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import NotFound from './pages/NotFound';
import Edit from './pages/Edit';

const reducer = (state, action) => {
  let nextState; // 변경된 데이터를 로컬 스토리지에 저정하기 위해 생성함

  switch (action.type) {
    case 'INIT':
      return action.data;
    case 'CREATE': {
      nextState = [...state, action.data];
      break;
    }
    case 'UPDATE': {
      nextState = state.map((diary) =>
        String(diary.diaryId) === String(action.data.diaryId)
          ? action.data
          : diary
      );
      break;
    }
    case 'DELETE': {
      nextState = state.filter(
        (diary) => String(diary.diaryId) !== String(action.targetId)
      );
      break;
    }
    default:
      return state;
  }

  localStorage.setItem('diary', JSON.stringify(nextState));
  return nextState;
};

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [diaryList, dispatch] = useReducer(reducer, []);
  const idRef = useRef(1);

  useEffect(() => {
    const storedDiaryList = localStorage.getItem('diary');
    if (!storedDiaryList) {
      setIsLoading(false);
      return;
    }

    const parsedDiaryList = JSON.parse(storedDiaryList);
    if (!Array.isArray(parsedDiaryList)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedDiaryList.forEach((diary) => {
      if (Number(diary.diaryId) > maxId) {
        maxId = Number(diary.diaryId);
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: 'INIT',
      data: parsedDiaryList,
    });

    setIsLoading(false);
  }, []);

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

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

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
