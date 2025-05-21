import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import NotFound from './pages/NotFound';
import Edit from './pages/Edit';
import { useReducer } from 'react';

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
  return state;
};

const App = () => {
  const [diaryData, dipatch] = useReducer(reducer, mockData);

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
