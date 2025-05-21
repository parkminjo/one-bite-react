import './Editor.css';
import { useState } from 'react';
import { getStringedDate } from '../utils/get-stringed-date';
import Button from './Button';
import EmotionItem from './EmotionItem';
import { useNavigate } from 'react-router-dom';

const EmotionList = [
  {
    emotionId: 1,
    emotionName: '완전 좋음',
  },
  {
    emotionId: 2,
    emotionName: '좋음',
  },
  {
    emotionId: 3,
    emotionName: '보통',
  },
  {
    emotionId: 4,
    emotionName: '나쁨',
  },
  {
    emotionId: 5,
    emotionName: '완전 나쁨',
  },
];

const Editor = ({ onSubmit }) => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: '',
    content: '',
  });

  const onChangeInput = (event) => {
    const { name } = event.target;

    let value = event.target.value;

    if (name === 'createdDate') {
      value = new Date(value);
    }

    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  const onClickBackButton = () => {
    navigate(-1);
  };

  return (
    <div className="editor">
      <section className="date-section">
        <h4>오늘의 날짜</h4>
        <input
          type="date"
          name="createdDate"
          value={getStringedDate(input.createdDate)}
          onChange={onChangeInput}
        />
      </section>
      <section className="emotion-section">
        <h4>오늘의 감정</h4>
        <div className="emotion-list-wrapper">
          {EmotionList.map((emotion) => {
            return (
              <EmotionItem
                key={emotion.emotionId}
                {...emotion}
                isSelected={emotion.emotionId === input.emotionId}
                onClick={() =>
                  onChangeInput({
                    target: {
                      name: 'emotionId',
                      value: emotion.emotionId,
                    },
                  })
                }
              />
            );
          })}
        </div>
      </section>
      <section className="content-section">
        <h4>오늘의 일기</h4>
        <textarea
          placeholder="오늘은 어땠나요?"
          name="content"
          value={input.content}
          onChange={onChangeInput}
        />
      </section>
      <section className="button-section">
        <Button text="취소하기" onClick={onClickBackButton} />
        <Button
          text="작성 완료"
          type="positive"
          onClick={onClickSubmitButton}
        />
      </section>
    </div>
  );
};

export default Editor;
