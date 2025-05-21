import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import NotFound from './pages/NotFound';
import Edit from './pages/Edit';

const App = () => {
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
