import { getEmotionImage } from '../utils/get-emotion-image';
import './EmotionItem.css';

const EmotionItem = ({ emotionId, emotionName, isSelected }) => {
  return (
    <div
      className={`emotion-item ${isSelected && `emotion-item-on-${emotionId}`}`}
    >
      <img
        className="emotion-img"
        src={getEmotionImage(emotionId)}
        alt="감정 이미지"
      />
      <div className="emotion-name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
