import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryDispatchContext, DiaryStateContext } from '../App';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';

const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const diaryList = useContext(DiaryStateContext);
  const [currentDiaryItem, setCurrentDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = diaryList.find(
      (diary) => String(diary.diaryId) === String(params.id)
    );

    if (!currentDiaryItem) {
      alert('존재하지 않는 일기입니다.');
      navigate('/', { replace: true });
    }

    setCurrentDiaryItem(currentDiaryItem);
  }, [params.id, diaryList]);

  const onClickBackButton = () => {
    navigate(-1);
  };

  const onClickDeleteButton = () => {
    if (window.confirm('정말로 삭제하시겠습니까? 다시 복구되지 않습니다.')) {
      onDelete(params.id);
      navigate('/', { replace: true });
    }
  };

  const onSubmit = () => {
    onUpdate();
  };

  return (
    <div>
      <Header
        title="일기 수정하기"
        leftChild={<Button text="< 뒤로가기" onClick={onClickBackButton} />}
        rightChild={
          <Button
            text="삭제하기"
            type="negative"
            onClick={onClickDeleteButton}
          />
        }
      />
      <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
