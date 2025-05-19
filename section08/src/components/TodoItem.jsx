import './TodoItem.css';

const TodoItem = ({ content, date, isDone }) => {
  return (
    <li className="todo-item">
      <input type="checkbox" checked={isDone} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </li>
  );
};

export default TodoItem;
