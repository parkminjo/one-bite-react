// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 반복문 for, 조건문 if을 사용할 수 없음

// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// boolean, undefined, null, 객체는 화면에 렌더링 되지 않음

// 3. 모든 태그는 닫혀있어야 한다.

// 4. 최상위 태그는 반드시 하나여야만 한다.
// <></> 사용 가능

import './Main.css';

const Main = () => {
  const user = {
    name: '박민조',
    isLogin: true,
  };
  return (
    <>
      {user.isLogin ? (
        <div className="logout">로그아웃</div>
      ) : (
        <div>로그인</div>
      )}
    </>
  );
};

export default Main;
