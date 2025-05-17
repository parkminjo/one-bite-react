const Controller = ({ setCount }) => {
  const handleClick = (value) => {
    setCount((prev) => prev + value);
  };

  return (
    <section>
      <button onClick={() => handleClick(-1)}>-1</button>
      <button onClick={() => handleClick(-10)}>-10</button>
      <button onClick={() => handleClick(-100)}>-100</button>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(10)}>+10</button>
      <button onClick={() => handleClick(100)}>+100</button>
      <button onClick={() => setCount(0)}>초기화</button>
    </section>
  );
};

export default Controller;
