import { memo } from 'react';
import './TodoItem.css';

const TodoItem = ({ id, content, date, isDone, onUpdate, onDelete }) => {
  const handleChangeChecked = () => {
    onUpdate(id);
  };

  const handleClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="todo-item">
      <input type="checkbox" checked={isDone} onChange={handleChangeChecked} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={handleClickDeleteButton}>삭제</button>
    </div>
  );
};

// 고차 컴포넌트 (HDC)
export default memo(TodoItem, (prevProps, nextProps) => {
  // 반환값에 따라 Props가 바뀌었는지 안 바뀌었는지 판단함
  // true = Props가 바뀌지 않음 => 리렌더링 x
  // false = Props가 바뀜 => 리렌더링 o
  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.date !== nextProps.date) return false;

  return true;
});
