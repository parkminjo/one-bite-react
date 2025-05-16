import './App.css';
import Button from './components/button';

const App = () => {
  const buttonProps = {
    text: '메일',
    color: 'red',
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <div>
      <Button {...buttonProps} />
      <Button text="카페" />
      <Button text="블로그">
        <div>자식 요소</div>
      </Button>
    </div>
  );
};

export default App;
