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

export default TodoItem;
