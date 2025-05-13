import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// root라는 아이디를 가진 요소를 불러옴
// render 메서드를 통해 App 컴포넌트를 렌더링하고 있음
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
