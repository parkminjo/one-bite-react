import { useContext, useMemo, useState } from 'react';
import TodoItem from './TodoItem';
import { TodoStateContext } from '../App';
import './TodoList.css';

const TodoList = () => {
  const todos = useContext(TodoStateContext);
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

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className="todo-list">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
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
              return <TodoItem key={todo.id} {...todo} />;
            })}
      </div>
    </div>
  );
};

export default TodoList;
