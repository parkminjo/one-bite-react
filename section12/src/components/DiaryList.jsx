import './DiaryList.css';
import { useContext } from 'react';
import { DiaryStateContext } from '../App';
import DiaryItem from './DiaryItem';
import Button from './Button';

const DiaryList = () => {
  const diaryList = useContext(DiaryStateContext);

  return (
    <div className="diary-list">
      <div className="menu-bar">
        <select>
          <option value="latest">최신순</option>
          <option value="oldest">오래된 순</option>
        </select>
        <Button text="새 일기 쓰기" type="positive" />
      </div>
      <div className="list-wrapper">
        {diaryList.map((diary) => {
          return <DiaryItem key={diary.diaryId} {...diary} />;
        })}
      </div>
    </div>
  );
};

export default DiaryList;
