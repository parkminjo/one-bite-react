import './TodoItem.css';

const TodoItem = ({ content, date, isDone }) => {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={isDone} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
