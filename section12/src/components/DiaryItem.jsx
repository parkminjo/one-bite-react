import './DiaryItem.css';
import { getEmotionImage } from '../utils/get-emotion-image';
import Button from './Button';

const DiaryItem = ({ diaryId, emotionId, createdDate, content }) => {
  return (
    <div className="diary-item">
      <div className={`img-section img-section-${emotionId}`}>
        <img src={getEmotionImage(emotionId)} alt="감정 이미지" />
      </div>
      <div className="info-section">
        <div className="created-date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button-section">
        <Button text="수정하기" />
      </div>
    </div>
  );
};

export default DiaryItem;
import './DiaryList.css';
