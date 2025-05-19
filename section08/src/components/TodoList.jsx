import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      <h4>Todo List 🌱</h4>
      <input type="text" placeholder="검색어를 입력하세요" />
      <ul className="todo-list-wrapper">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
