import Header from '../components/Header';
import DiaryList from '../components/DiaryList';
import Button from '../components/Button';

const Home = () => {
  return (
    <div>
      <Header
        title={new Date().toLocaleDateString()}
        leftChild={<Button text="<" />}
        rightChild={<Button text=">" />}
      />
      <DiaryList />
    </div>
  );
};

export default Home;
