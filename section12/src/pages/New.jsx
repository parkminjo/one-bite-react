import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryDispatchContext } from '../App';
import Button from '../components/Button';
import Editor from '../components/Editor';
import Header from '../components/Header';

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();

  const onClickBackButton = () => {
    navigate(-1);
  };

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    navigate('/', { replace: true }); // 메인홈으로 이동함과 동시에 뒤로가기를 막아줌
  };

  return (
    <div>
      <Header
        title="새 일기 쓰기"
        leftChild={<Button text="< 뒤로가기" onClick={onClickBackButton} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
