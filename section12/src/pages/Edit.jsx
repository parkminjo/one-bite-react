import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryDispatchContext } from '../App';
import useDiary from '../hooks/use-diary.jsx';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';

const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const currentDiaryItem = useDiary(params.id);

  const onClickBackButton = () => {
    navigate(-1);
  };

  const onClickDeleteButton = () => {
    if (window.confirm('정말로 삭제하시겠습니까? 다시 복구되지 않습니다.')) {
      onDelete(params.id);
      navigate('/', { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm('정말로 수정하시겠습니까?')) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      navigate('/', { replace: true });
    }
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
