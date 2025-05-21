import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import { useContext } from 'react';
import { DiaryStateContext } from '../App';
import Viewer from '../components/Viewer';

const Diary = () => {
  const params = useParams();
  const navigate = useNavigate();

  const diaryList = useContext(DiaryStateContext);

  const onClickBackButton = () => {
    navigate(-1);
  };

  const onClickUpdateButton = () => {
    navigate(`/edit/${params.id}`);
  };

  return (
    <div>
      <Header
        title={`날짜 기록`}
        leftChild={<Button text="< 뒤로가기" onClick={onClickBackButton} />}
        rightChild={<Button text="수정하기" onClick={onClickUpdateButton} />}
      />
      <Viewer />
    </div>
  );
};

export default Diary;
