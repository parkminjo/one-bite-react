type ButtonProps = {
  text: string;
  color?: string;
};

const Button = ({ text, color = 'black' }: ButtonProps) => {
  return (
    <button style={{ color }}>
      {text} - {color?.toUpperCase()}
    </button>
  );
};

export default Button;
