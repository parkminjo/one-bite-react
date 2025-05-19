import './Editor.css';

const Editor = () => {
  return (
    <div className="editor">
      <input type="text" placeholder="새로운 TODO를 입력하세요" />
      <button>추가</button>
    </div>
  );
};

export default Editor;
