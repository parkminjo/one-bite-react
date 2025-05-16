const Button = ({ text, color = 'black', children }) => {
  // 이벤트 객체
  // 합성 이벤트 객체 = 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태
  const handleClick = (event) => {
    console.log(event);
    console.log(text);
  };

  return (
    <button onClick={handleClick} style={{ color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
