import './Button.css';

const Button = ({ text, type, onClick }) => {
  return (
    <button className={`common-button button-${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
