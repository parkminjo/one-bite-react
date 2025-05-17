import { useRef, useState } from 'react';

const Register = () => {
  // 여러 개의 state를 하나의 객체로 묶어서 관리할 수 있음
  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const handleChange = (event) => {
    countRef.current++;

    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (input.name === '') {
      // 이름을 입력하는 DOM 요소에 포커스 주기
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          type="text"
          placeholder="이름"
          onChange={handleChange}
          value={input.name}
        />
      </div>
      <div>
        <input
          name="birth"
          type="date"
          onChange={handleChange}
          value={input.birth}
        />
      </div>
      <div>
        <select name="country" onChange={handleChange} value={input.country}>
          <option>국적을 선택해주세요</option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea
          name="bio"
          onChange={handleChange}
          value={input.bio}
        ></textarea>
      </div>
      <button type="submit" onClick={handleSubmit}>
        제출
      </button>
    </div>
  );
};

export default Register;
