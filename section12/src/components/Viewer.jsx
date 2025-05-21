import './Viewer.css';
import { emotionList } from '../constants/emotion-list';
import { getEmotionImage } from '../utils/get-emotion-image';

const Viewer = () => {
  const emotionId = 1;

  const emotionItem = emotionList.find(
    (emotion) => String(emotion.emotionId) === String(emotionId)
  );

  return (
    <div className="viewer">
      <section className="img-section">
        <h4>오늘의 감정</h4>
        <div className={`emotion-img-wrapper emotion-img-wrapper-${emotionId}`}>
          <img src={getEmotionImage(emotionId)} alt="감정 이미지" />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content-section">
        <h4>오늘의 일기</h4>
        <div className="content-wrapper">
          <p>..dlfrl</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
