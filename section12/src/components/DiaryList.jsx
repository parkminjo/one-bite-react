import './DiaryList.css';
import DiaryItem from './DiaryItem';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const DiaryList = ({ monthlyDiaryList }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState();

  const onChangeSortType = (event) => {
    setSortType(event.target.value);
  };

  const getSortedData = () => {
    return monthlyDiaryList.toSorted((a, b) => {
      if (sortType === 'oldest') {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };

  const sortedDiaryList = getSortedData();

  const onClickCreateButton = () => {
    navigate('/new');
  };

  return (
    <div className="diary-list">
      <div className="menu-bar">
        <select onChange={onChangeSortType}>
          <option value="latest">최신순</option>
          <option value="oldest">오래된 순</option>
        </select>
        <Button
          text="새 일기 쓰기"
          type="positive"
          onClick={onClickCreateButton}
        />
      </div>
      <div className="list-wrapper">
        {sortedDiaryList.map((diary) => {
          return <DiaryItem key={diary.diaryId} {...diary} />;
        })}
      </div>
    </div>
  );
};

export default DiaryList;
