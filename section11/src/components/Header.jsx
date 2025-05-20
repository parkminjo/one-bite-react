import { memo } from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h3>오늘은 🗓️</h3>
      <h1>{new Date().toDateString()}</h1>
    </header>
  );
};

export default memo(Header);
