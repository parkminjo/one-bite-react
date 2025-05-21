import './DiaryItem.css';
import { getEmotionImage } from '../utils/get-emotion-image';
import Button from './Button';

const DiaryItem = ({ diaryId, emotionId, createdDate, content }) => {
  const navigate = useNavigate();

  const onClickDiaryItem = () => {
    navigate(`/diary/${diaryId}`);
  };

  const onClickUpdateButton = () => {
    navigate(`/edit/${diaryId}`);
  };

  return (
    <div className="diary-item">
      <div
        className={`img-section img-section-${emotionId}`}
        onClick={onClickDiaryItem}
      >
        <img src={getEmotionImage(emotionId)} alt="감정 이미지" />
      </div>
      <div className="info-section" onClick={onClickDiaryItem}>
        <div className="created-date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button-section">
        <Button text="수정하기" onClick={onClickUpdateButton} />
      </div>
    </div>
  );
};

export default DiaryItem;
import './DiaryList.css';
import { useNavigate } from 'react-router-dom';
