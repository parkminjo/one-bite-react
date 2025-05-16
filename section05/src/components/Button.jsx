const Button = ({ text, color = 'black', children }) => {
  console.log(text);
  return (
    <button style={{ color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
