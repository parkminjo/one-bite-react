import { useContext, useState } from 'react';
import { DiaryStateContext } from '../App';
import Header from '../components/Header';
import DiaryList from '../components/DiaryList';
import Button from '../components/Button';
import { getMonthlyData } from '../utils/get-monthly-data';

const Home = () => {
  const diaryList = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyDiaryList = getMonthlyData(pivotDate, diaryList);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text="<" onClick={onDecreaseMonth} />}
        rightChild={<Button text=">" onClick={onIncreaseMonth} />}
      />
      <DiaryList monthlyDiaryList={monthlyDiaryList} />
    </div>
  );
};

export default Home;
