import { useNavigate, useParams } from 'react-router-dom';
import useDiary from '../hooks/use-diary.jsx';
import { getStringedDate } from '../utils/get-stringed-date';
import usePageTitle from '../hooks/use-page-title.jsx';
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';

const Diary = () => {
  const params = useParams();
  const navigate = useNavigate();

  const currentDiaryItem = useDiary(params.id);
  usePageTitle(`${params.id}번 일기`);

  const onClickBackButton = () => {
    navigate(-1);
  };

  const onClickUpdateButton = () => {
    navigate(`/edit/${params.id}`);
  };

  if (!currentDiaryItem) {
    return <div>로딩 중...</div>;
  }

  const title = getStringedDate(new Date(currentDiaryItem.createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button text="< 뒤로가기" onClick={onClickBackButton} />}
        rightChild={<Button text="수정하기" onClick={onClickUpdateButton} />}
      />
      <Viewer currentDiaryItem={currentDiaryItem} />
    </div>
  );
};

export default Diary;
