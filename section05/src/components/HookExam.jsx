import useInput from '../hooks/useInput';

const HookExam = () => {
  const [input, handleChange] = useInput();
  return <input value={input} onChange={handleChange} />;
};

export default HookExam;
