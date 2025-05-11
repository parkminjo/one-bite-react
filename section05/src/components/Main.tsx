import './Main.css';

const Main = () => {
  const user = {
    name: 'minjo',
    isLogin: true,
  };
  return (
    <div className="logout">
      {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
    </div>
  );
};

export default Main;
