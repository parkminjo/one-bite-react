import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryDispatchContext } from '../App';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';

const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const onClickBackButton = () => {
    navigate(-1);
  };

  const onClickDeleteButton = () => {
    onDelete(params.id);
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
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
