import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Editor />
      <TodoList />
    </div>
  );
};

export default App;
