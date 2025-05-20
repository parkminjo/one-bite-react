import { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState('');

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const getFilteredData = () => {
    if (search === '') {
      return todos;
    }

    const filteredData = todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
    return filteredData;
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="todo-list">
      <h4>Todo List 🌱</h4>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={handleChangeSearch}
      />
      <div className="todo-list-wrapper">
        {filteredTodos.length === 0
          ? '입력한 TODO가 없습니다.'
          : filteredTodos.map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  {...todo}
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                />
              );
            })}
      </div>
    </div>
  );
};

export default TodoList;
