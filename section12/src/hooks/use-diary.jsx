import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryStateContext } from '../App';

const useDiary = (diaryId) => {
  const navigate = useNavigate();

  const diaryList = useContext(DiaryStateContext);
  const [currentDiaryItem, setCurrentDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = diaryList.find(
      (diary) => String(diary.diaryId) === String(diaryId)
    );

    if (!currentDiaryItem) {
      alert('존재하지 않는 일기입니다.');
      navigate('/', { replace: true });
    }

    setCurrentDiaryItem(currentDiaryItem);
  }, [diaryId]);

  return currentDiaryItem;
};

export default useDiary;
