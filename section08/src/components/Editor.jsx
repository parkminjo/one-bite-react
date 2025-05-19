import './Editor.css';
import { useRef, useState } from 'react';

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState('');
  const contentRef = useRef();

  const handleChangeContent = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = () => {
    if (content === '') {
      contentRef.current.focus();
      alert('TODO를 입력해주세요.');
      return;
    }

    onCreate(content);
    setContent('');
  };

  const handleKeydown = (event) => {
    if (event.code === 'Enter') handleSubmit();
  };

  return (
    <div className="editor">
      <input
        ref={contentRef}
        type="text"
        placeholder="새로운 TODO를 입력하세요"
        value={content}
        onChange={handleChangeContent}
        onKeyDown={handleKeydown}
      />
      <button onClick={handleSubmit}>추가</button>
    </div>
  );
};

export default Editor;
